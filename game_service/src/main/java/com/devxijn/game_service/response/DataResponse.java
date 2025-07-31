package com.devxijn.game_service.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Objects;

/**
 * @author devxijn
 * @since 31/07/2025
 */
@Builder
@AllArgsConstructor
@Data
@NoArgsConstructor
public class DataResponse<T> {
    String message;
    T data;
}
