package com.devxijn.game_service.entity;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

/**
 * @author devxijn
 * @since 7/20/2025
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Match {
    List<Pair> pairRows;
    List<Pair> pairColumns;
}
