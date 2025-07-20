package com.devxijn.game_service.service;

import com.devxijn.game_service.entity.Board;
import com.devxijn.game_service.entity.Match;

import java.util.List;

/**
 * @author devxijn
 * @since 7/20/2025
 */
public interface BoardService {

    Board generateGame();

    List<Match> findMatches(Board board);
}
