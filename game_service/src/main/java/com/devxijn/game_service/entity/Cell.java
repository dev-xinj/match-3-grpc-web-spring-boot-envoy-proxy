package com.devxijn.game_service.entity;

import com.devxijn.game_service.enums.CellType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

/**
 * @author devxijn
 * @since 7/20/2025
 */
@Builder
@AllArgsConstructor
@Data
public class Cell {
    private CellType cellType;
    private int index;
    private boolean isNew;
    private boolean isVisited;
    private boolean isQueue;
}
