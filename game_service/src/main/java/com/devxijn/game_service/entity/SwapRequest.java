package com.devxijn.game_service.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author devxijn
 * @since 30/07/2025
 */
@Builder
@AllArgsConstructor
@Data
@NoArgsConstructor
public class SwapRequest {
    Cell[][] cells;
    Pair firstPair;
    Pair secondPair;

}
