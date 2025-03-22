package com.devxijn.grpc_service.service.impl;

import com.devxijn.grpc_service.entity.ItemModel;
import com.devxijn.grpc_service.entity.Match;
import com.devxijn.grpc_service.entity.Pair;
import com.devxijn.grpc_service.service.BoardService;
import lombok.extern.java.Log;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Log4j2
@Service
public class BoardServiceImpl implements BoardService {
    private final int[] dx = {-1, 1}; //trên dưới đảo ngược dx dy là trái phải
    private final int[] dy = {0, 0};
    private final Integer COL = 18;
    private final Integer ROW = 10;

    @Override
    public ItemModel[][] generateBoard() {
        ItemModel[][] data = new ItemModel[ROW][COL];
        for (int i = 0; i < ROW; i++) {
            for (int j = 0; j < COL; j++) {
                data[i][j] = ItemModel.builder().key(randNumber(5)).index(0).isNew(false).isQueue(false).isVisited(false).build();
            }
        }
        return data;
    }

    private List<Pair> dfs(int i, int j, int key, boolean[][] visited, int[] dx, int[] dy, boolean isHori, ItemModel[][] itemModels) {
        List<Pair> pairs = new LinkedList<>();
        if (itemModels[i][j].getKey() == key) {
            pairs.add(new Pair(new Integer[]{i, j}));
        }
        visited[i][j] = true;
        if (isHori) {
            itemModels[i][j].setVisited(true);
        }
        for (int k = 0; k < 2; k++) {
            int i1 = i + dx[k];
            int j1 = j + dy[k];
            if (i1 >= 0 && i1 < ROW && j1 >= 0 && j1 < COL && itemModels[i1][j1].getKey() == key && !visited[i1][j1] && !itemModels[i1][j1].isVisited()) {

                pairs.addAll(this.dfs(i1, j1, key, visited, dx, dy, isHori, itemModels));
            }
        }
        return pairs;
    }

    @Override
    public List<Match> scanBoard(ItemModel[][] itemModels) {
        List<Match> matches = new ArrayList<>();
        int listKey = 5;
        while (listKey >= 0) {
            boolean[][] isVisited = initVisited();
            scanAllBoard(listKey, isVisited, itemModels, matches);
            listKey--;
        }
        if (!matches.isEmpty()) {
            // clear matches
            //
        }
        return matches;

    }

    public void scanAllBoard(int key, boolean[][] isVisited, ItemModel[][] itemModels, List<Match> matches) {
        for (int i = 0; i < ROW; i++) {
            for (int j = 0; j < COL; j++) {
                Match match = elementMatch(i, j, key, itemModels, isVisited);
                if (!Objects.isNull(match.getPairsX()) || !Objects.isNull(match.getPairsY())) {
                    matches.add(match);
                }
            }
        }
    }

    public Match elementMatch(int i, int j, int key, ItemModel[][] itemModels, boolean[][] isVisited) {
        Match match = new Match();
        if (itemModels[i][j].getKey() == key && !isVisited[i][j]) {
            boolean[][] newVisited = initVisited();
            List<Pair> pairCol = dfs(i, j, key, isVisited, dx, dy, false, itemModels);
            List<Pair> pairRow = new LinkedList<>();
            for (int k = 0; k < pairCol.size(); k++) {
                Integer[] indexs = pairCol.get(k).getIndex();
                pairRow.addAll(dfs(indexs[0], indexs[1], key, newVisited, dy, dx, true, itemModels));
            }
            Integer max = maxNumber(pairRow);
            log.info(max);
            pairRow = pairRow.stream().filter(e -> {
                return Objects.equals(e.getIndex()[0], max);
            }).collect(Collectors.toList());
            if (pairRow.size() > 2) {
                match.setPairsX(pairRow);
            }
            if (pairCol.size() > 2) {
                match.setPairsY(pairCol);
            }
        }

        return match;
    }


    private Integer maxNumber(List<Pair> pairCol) {
        int[] counter = new int[1000];
        pairCol.forEach(e -> {
            counter[e.getIndex()[0]]++;
        });
        int max = 0;
        for (int i = 0; i < counter.length; i++) {
            if (counter[max] < counter[i]) {
                max = i;
            }
        }
        return max;
    }

    private Integer randNumber(int max) {
        return new Random().nextInt(max) + 1;
    }

    private boolean[][] initVisited() {
        boolean[][] isVisited = new boolean[ROW][COL];
        Arrays.stream(isVisited).map(e -> {
            Arrays.fill(e, false);
            return e;
        });
        return isVisited;
    }
}
