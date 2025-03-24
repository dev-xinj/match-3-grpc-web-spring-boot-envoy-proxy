package com.devxijn.grpc_service.grpc;

import com.devxijn.grpc_service.convert.PairsConvert;
import com.devxijn.grpc_service.entity.ItemModel;
import com.devxijn.grpc_service.entity.Match;
import com.devxijn.grpc_service.grpc.entity.*;
import com.devxijn.grpc_service.service.BoardService;
import com.google.protobuf.Empty;
import io.grpc.stub.StreamObserver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.grpc.server.service.GrpcService;

import java.util.ArrayList;
import java.util.List;

@GrpcService
public class ItemGrpc extends ItemServiceGrpc.ItemServiceImplBase {
    private BoardService boardService;

    ItemGrpc(BoardService boardService) {
        this.boardService = boardService;
    }

    @Override
    public void generateMatrix(Empty request, StreamObserver<Matrix> responseObserver) {
        ItemModel[][] boardModels = boardService.generateBoard();
        int length = boardModels.length;
        Matrix.Builder response = Matrix.newBuilder();
        for (ItemModel[] boardModel : boardModels) {
            RowItem.Builder rowItem = RowItem.newBuilder();
            for (int j = 0; j < boardModels[0].length; j++) {
                rowItem.addItem(
                        Item.newBuilder()
                                .setKey(boardModel[j].getKey())
                                .setIndex(boardModel[j].getIndex())
                                .setIsNew(boardModel[j].isNew())
                                .setIsQueue(boardModel[j].isQueue())
                                .setIsVisited(boardModel[j].isVisited())
                                .build());
            }
            response.addRowItem(rowItem.build());
        }
        responseObserver.onNext(response.build());

        responseObserver.onCompleted();
    }

    @Override
    public void scanMatrix(Matrix request, StreamObserver<Axis> responseObserver) {
//        Pairs p = boardService.scanBoard(1, 2, 1, boardService.generateBoard());

        ItemModel[][] itemModels = new ItemModel[10][18];
        int length = request.getRowItemList().size();
        for (int i = 0; i < length; i++) {
            List<Item> items = request.getRowItemList().get(i).getItemList();
            int lengthRows = items.size();
            for (int j = 0; j < lengthRows; j++) {
                itemModels[i][j] = new ItemModel();
                itemModels[i][j].setIndex(items.get(j).getIndex());
                itemModels[i][j].setKey(items.get(j).getKey());
                itemModels[i][j].setVisited(items.get(j).getIsVisited());
                itemModels[i][j].setNew(items.get(j).getIsNew());
                itemModels[i][j].setQueue(items.get(j).getIsQueue());

            }
        }
        List<Match> matchesPairs = boardService.scanBoard(itemModels);
        matchesPairs.forEach(e -> {
            Axis axis = PairsConvert.toAxisGrpc(e);
            responseObserver.onNext(axis);
        });
        responseObserver.onCompleted();

    }

    @Override
    public void elementMatches(SwapRequest request, StreamObserver<Axis> responseObserver) {
        ItemModel[][] itemModels = new ItemModel[10][18];
        int length = request.getMatrix().getRowItemList().size();
        for (int i = 0; i < length; i++) {
            List<Item> items = request.getMatrix().getRowItemList().get(i).getItemList();
            int lengthRows = items.size();
            for (int j = 0; j < lengthRows; j++) {
                itemModels[i][j] = new ItemModel();
                itemModels[i][j].setIndex(items.get(j).getIndex());
                itemModels[i][j].setKey(items.get(j).getKey());
                itemModels[i][j].setVisited(items.get(j).getIsVisited());
                itemModels[i][j].setNew(items.get(j).getIsNew());
                itemModels[i][j].setQueue(items.get(j).getIsQueue());

            }
        }
        List<Match> matchesPairs = boardService.elementSwap(request.getRow(), request.getCol(), request.getKey(), itemModels);
        matchesPairs.forEach(e -> {
            Axis axis = PairsConvert.toAxisGrpc(e);
            responseObserver.onNext(axis);
        });
        responseObserver.onCompleted();
    }
}
