package com.devxijn.game_service.service.impl;

import com.devxijn.game_service.entity.Board;
import com.devxijn.game_service.entity.Cell;
import com.devxijn.game_service.entity.Match;
import com.devxijn.game_service.entity.Pair;
import com.devxijn.game_service.enums.CellType;
import com.devxijn.game_service.service.BoardService;
import com.devxijn.game_service.utils.CommonUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * @author devxijn
 * @since 7/20/2025
 */
@Service
public class BoardServiceImpl implements BoardService {
    private final int rows = 10;
    private final int columns = 18;
    private final int[] dx = {-1, 1}; //trên dưới đảo ngược dx dy là trái phải
    private final int[] dy = {0, 0};
    private final Logger log = LoggerFactory.getLogger(BoardServiceImpl.class);
//    BoardCore boardCore;

//    @Autowired
//    public BoardServiceImpl(BoardCore boardCore) {
//        this.boardCore = boardCore;
//    }

    @Override
    public Board generateGame(Integer rows, Integer columns) {
        return Board.builder()
                .cells(generateBoard(rows, columns))
                .build();
    }

    @Override
    public List<Match> findMatches(Board board) {
        List<Match> matches = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
//            Map<Integer, Integer> mapIndex = new HashMap<>();
            for (int j = 0; j < 18; j++) {
                Cell cell = board.getCells()[i][j];
                if (cell.isVisited()) {
                    continue;
                }
//                if (mapIndex.containsKey(cell.getIndex())) {
//                    log.info("Doing contain Key");
//
//                } else {
//                    log.info("Do not contain Key");
//                    mapIndex.put(cell.getIndex(), cell.getIndex());
//                Match match = elementMatch(i, j, board.getCells()[i][j].getIndex(), board.getCells(), initVisited());
                Match match = findConnectedMatch(i, j, board.getCells()[i][j].getIndex(), board.getCells(), initVisited());
                if (!Objects.isNull(match.getPairRows()) || !Objects.isNull(match.getPairColumns())) {
                    matches.add(match);
                }
//                }
//                log.info(mapIndex.get(cell.getIndex()).toString());
            }
        }
        return matches;
    }

    public Cell[][] generateBoard(int row, int column) {
        Cell[][] cells = new Cell[row][column];

        for (int i = 0; i < row; i++) {
            for (int j = 0; j < column; j++) {

                cells[i][j] = createDefaultCell(CellType.NORMAL, 6 - 1);
            }
        }
        return cells;
    }

    public Match findConnectedMatch(int x, int y, int type, Cell[][] cells, boolean[][] visited) {
        List<Pair> result = new ArrayList<>();
        Queue<Pair> queue = new LinkedList<>();
        queue.add(new Pair(x, y));
        visited[x][y] = true;
        cells[x][y].setVisited(true);
        while (!queue.isEmpty()) { //nếu queue != rỗng
            Pair p = queue.poll(); //lấy phần tử đầu của queue
            result.add(p);//thêm phần tử đầu của queue vừa lấy vào danh sách cần xử lý

            int[][] dirs = {{0, 1}, {1, 0}, {-1, 0}, {0, -1}};
            for (int[] d : dirs) { //duyệt các cạnh kề
                int nx = p.getRow() + d[0], ny = p.getCol() + d[1];
                if (nx >= 0 && nx < 10 && ny >= 0 && ny < 18
                        && !visited[nx][ny]
                        && cells[nx][ny].getIndex() == type) {
                    queue.add(new Pair(nx, ny));
                    visited[nx][ny] = true;
                    cells[nx][ny].setVisited(true);
                }
            }
        }

        Match match = new Match();
        if (result.size() >= 3) {
            Integer maxRow = getMostFrequent(result, Pair::getRow);
            Integer maxCol = getMostFrequent(result, Pair::getCol);
            List<Pair> pairRow = filterByCondition(result, Pair::getRow, maxRow);
            List<Pair> pairCol = filterByCondition(result, Pair::getCol, maxCol);
            if (pairRow.size() > 2) {
                match.setPairRows(pairRow);
            }
            if (pairCol.size() > 2) {
                match.setPairColumns(pairCol);
            }
        }
        return match;
    }

    public Match elementMatch(int i, int j, int index, Cell[][] cells, boolean[][] isVisited) {
        Match match = new Match();
        if (cells[i][j].getIndex() == index && !isVisited[i][j]) {
            boolean[][] newVisited = initVisited();
            List<Pair> pairCol = dfs(i, j, index, isVisited, dx, dy, false, cells);
            List<Pair> pairRow = new LinkedList<>();
            for (Pair pair : pairCol) {
                pairRow.addAll(dfs(pair.getRow(), pair.getCol(), index, newVisited, dy, dx, true, cells));
            }
            Integer max = getMostFrequent(pairRow, Pair::getRow);
            pairRow = pairRow.stream().filter(e -> {
                return Objects.equals(e.getRow(), max);
            }).collect(Collectors.toList());
            if (pairRow.size() > 2) {
                match.setPairRows(pairRow);
            }
            if (pairCol.size() > 2) {
                match.setPairColumns(pairCol);
            }
        }

        return match;
    }

    private List<Pair> filterByCondition(List<Pair> pairs, Function<Pair, Integer> func, Integer valueCompare) {
        return pairs.stream().filter(e -> {
            return Objects.equals(func.apply(e), valueCompare);
        }).toList();
    }

    private Integer getMostFrequent(List<Pair> pairs, Function<Pair, Integer> extractor) {
        int[] counter = new int[1000];
        for (Pair p : pairs) {
            counter[extractor.apply(p)]++;
        }

        int maxIndex = 0;
        for (int i = 1; i < counter.length; i++) {
            if (counter[i] > counter[maxIndex]) {
                maxIndex = i;
            }
        }
        return maxIndex;
    }

    private List<Pair> dfs(int i, int j, int index, boolean[][] visited, int[] dx, int[] dy, boolean isHori, Cell[][] cells) {
        List<Pair> pairs = new LinkedList<>();
        if (cells[i][j].getIndex() == index) {
            pairs.add(new Pair(i, j));
        }
        visited[i][j] = true;
        if (isHori) {
            cells[i][j].setVisited(true);
        }
        for (int k = 0; k < 2; k++) {
            int i1 = i + dx[k];
            int j1 = j + dy[k];
            if (i1 >= 0 && i1 < rows && j1 >= 0 && j1 < columns && cells[i1][j1].getIndex() == index && !visited[i1][j1] && !cells[i1][j1].isVisited()) {

                pairs.addAll(this.dfs(i1, j1, index, visited, dx, dy, isHori, cells));
            }
        }
        return pairs;
    }

    private Cell createDefaultCell(CellType cellType, int maxIndex) {
        return Cell.builder()
                .cellType(cellType)
                .index(CommonUtil.randNumber(maxIndex))
                .isNew(false)
                .isQueue(false)
                .isVisited(false)
                .build();
    }

    private boolean[][] initVisited() {
        boolean[][] isVisited = new boolean[rows][columns];
        for (boolean[] row : isVisited) {
            Arrays.fill(row, false);
        }
        return isVisited;
    }
}
