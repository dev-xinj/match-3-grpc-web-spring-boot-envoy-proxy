package com.devxijn.grpc_service.convert;

import com.devxijn.grpc_service.entity.Match;
import com.devxijn.grpc_service.grpc.entity.Axis;
import com.devxijn.grpc_service.grpc.entity.Pair;
import com.devxijn.grpc_service.grpc.entity.Pairs;
import com.devxijn.grpc_service.grpc.entity.TYPE;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class PairsConvert {

    public static Axis toAxisGrpc(Match match) {
        Axis.Builder axis = Axis.newBuilder();
        if (!Objects.isNull(match.getPairsX()) && !match.getPairsX().isEmpty()) {
            List<com.devxijn.grpc_service.entity.Pair> pairX = match.getPairsX();
            Pairs.Builder pairs = Pairs.newBuilder();
            pairX.forEach(e -> {
                pairs.addPairs(Pair.newBuilder()
                                .addAllIndex(Arrays.asList(e.getIndex()))
                                .build())
                        .setType(TYPE.HORIZONTAL);
            });
            axis.addPairs(pairs);

        }
        if (!Objects.isNull(match.getPairsY()) && !match.getPairsY().isEmpty()) {
            List<com.devxijn.grpc_service.entity.Pair> pairY = match.getPairsY();
            Pairs.Builder pairs = Pairs.newBuilder();
            pairY.forEach(e -> {
                pairs.addPairs(Pair.newBuilder()
                                .addAllIndex(Arrays.asList(e.getIndex()))
                                .build())
                        .setType(TYPE.VERTICAL);
            });
            axis.addPairs(pairs);
        }
        return axis.build();


    }
}
