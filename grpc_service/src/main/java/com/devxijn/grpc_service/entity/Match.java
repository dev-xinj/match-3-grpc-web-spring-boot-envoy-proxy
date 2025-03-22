package com.devxijn.grpc_service.entity;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Match {
    List<Pair> pairsX;
    List<Pair> pairsY;
}
