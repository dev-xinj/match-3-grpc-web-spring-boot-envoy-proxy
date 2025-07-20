package com.devxijn.game_service.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
@Builder
@AllArgsConstructor
@Data
public class Board {
    private Cell[][] cells;
}
