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
                Match match = elementMatch(i, j, board.getCells()[i][j].getIndex(), board.getCells(), initVisited());
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

    public Match elementMatch(int i, int j, int index, Cell[][] cells, boolean[][] isVisited) {
        Match match = new Match();
        if (cells[i][j].getIndex() == index && !isVisited[i][j]) {
            boolean[][] newVisited = initVisited();
            List<Pair> pairCol = dfs(i, j, index, isVisited, dx, dy, false, cells);
            List<Pair> pairRow = new LinkedList<>();
            for (Pair pair : pairCol) {
                pairRow.addAll(dfs(pair.getRow(), pair.getCol(), index, newVisited, dy, dx, true, cells));
            }
            Integer max = maxNumber(pairRow);
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

    private Integer maxNumber(List<Pair> pairCol) {
        int[] counter = new int[1000];
        pairCol.forEach(e -> {
            counter[e.getRow()]++;
        });
        int max = 0;
        for (int i = 0; i < counter.length; i++) {
            if (counter[max] < counter[i]) {
                max = i;
            }
        }
        return max;
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
        Arrays.stream(isVisited).map(e -> {
            Arrays.fill(e, false);
            return e;
        });
        return isVisited;
    }
}
