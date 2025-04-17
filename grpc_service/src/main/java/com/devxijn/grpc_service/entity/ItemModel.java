package com.devxijn.grpc_service.entity;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Component;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ItemModel {
    String id;
    Integer key;
    Integer index;
    boolean isNew;
    boolean isVisited;
    boolean isQueue;
}
