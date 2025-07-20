package com.devxijn.game_service.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.extern.flogger.Flogger;
import org.slf4j.ILoggerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Arrays;
import java.util.stream.Collectors;

/**
 * @author devxijn
 * @since 7/20/2025
 */
public enum CellType {
    @JsonProperty("NORMAL")
    NORMAL;

    private static final Logger log = LoggerFactory.getLogger(CellType.class);

    @JsonCreator
    public static CellType fromValue(String value) {
        for (CellType cellType : values()) {
            if (cellType.name().equalsIgnoreCase(value)) {
                return cellType;
            }
        }
        String messString = enumOf(value);
        log.info(messString);
        throw new IllegalArgumentException(messString);
    }

    private static String enumOf(String value) {
        String literal = Arrays.stream(values())
                .map(Enum::name)
                .collect(Collectors.joining(", "));
        return String.format("Value {%s} does not match the %s", value, literal);
    }
}
