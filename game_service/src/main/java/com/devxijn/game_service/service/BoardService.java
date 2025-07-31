package com.devxijn.game_service.service;

import com.devxijn.game_service.entity.Board;
import com.devxijn.game_service.entity.Match;
import com.devxijn.game_service.entity.Pair;
import com.devxijn.game_service.response.DataResponse;

import java.util.List;

/**
 * @author devxijn
 * @since 7/20/2025
 */
public interface BoardService {

    List<Match> findMatchesByIndexCell(Board board, Pair firstIndexCell, Pair secondIndexCell);

    Board generateGame(Integer rows,Integer columns);

    List<Match> findMatches(Board board,boolean isCheck);

    DataResponse<Boolean> checkMatches(Board board);
}
