//package com.devxijn.game_service.core;
//
//import com.devxijn.game_service.entity.Cell;
//import com.devxijn.game_service.enums.CellType;
//import com.devxijn.game_service.utils.CommonUtil;
//import lombok.extern.log4j.Log4j;
//import org.springframework.stereotype.Component;
//
///**
// * @author devxijn
// * @since 7/20/2025
// */
//@Log4j
//@Component
//public class BoardCore {
//    private final int[] dx = {-1, 1};
//    private final int[] yx = {0, 0};
////    private final Integer COL = 18;
////    private final Integer ROW = 10;
//
//    public Cell[][] generateBoard(int row, int column) {
//        Cell[][] cells = new Cell[row][column];
//        for (int i = 0; i < row; i++) {
//            for (int j = 0; j < column; j++) {
////                cells[i][j] = Cell.builder()
////                        .type(CellType.NORMAL.name())
////                        .index(CommonUtil.randNumber(4))
////                        .isNew(false)
////                        .isQueue(false)
////                        .isVisited(false)
////                        .build();
////                cells[i][j] = new Cell();
//                cells[i][j] = createDefaultCell(CellType.NORMAL, 4);
//            }
//        }
//        return cells;
//    }
//
//    private Cell createDefaultCell(CellType cellType, int maxIndex) {
////        return new Cell(cellType, CommonUtil.randNumber(maxIndex), false, false, false);
//
//        return Cell.builder()
//                .cellType(cellType)
//                .index(CommonUtil.randNumber(maxIndex))
//                .isNew(false)
//                .isQueue(false)
//                .isVisited(false)
//                .build();
//    }
//}
