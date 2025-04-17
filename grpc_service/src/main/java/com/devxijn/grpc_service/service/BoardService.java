package com.devxijn.grpc_service.service;

import com.devxijn.grpc_service.entity.BoardModel;
import com.devxijn.grpc_service.entity.ItemModel;
import com.devxijn.grpc_service.entity.Match;
import com.devxijn.grpc_service.grpc.entity.Pairs;

import java.util.List;

public interface BoardService {

    ItemModel[][] generateBoard();

    List<Match> scanBoard(ItemModel[][] itemModels);

    List<Match> elementSwap(int row, int col, int key, ItemModel[][] itemModels);
}
