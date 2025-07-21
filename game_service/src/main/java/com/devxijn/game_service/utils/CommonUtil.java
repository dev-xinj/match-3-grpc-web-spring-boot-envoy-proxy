package com.devxijn.game_service.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Random;

/**
 * @author devxijn
 * @since 7/20/2025
 */

public class CommonUtil {
    public static int randNumber(int max) {
        return new Random().nextInt(max) +1;
    }
}
