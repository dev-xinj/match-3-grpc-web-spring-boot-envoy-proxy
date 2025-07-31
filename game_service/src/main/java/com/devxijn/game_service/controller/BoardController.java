package com.devxijn.game_service.controller;

import com.devxijn.game_service.entity.Board;
import com.devxijn.game_service.entity.Match;
import com.devxijn.game_service.entity.Pair;
import com.devxijn.game_service.entity.SwapRequest;
import com.devxijn.game_service.response.DataResponse;
import com.devxijn.game_service.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author devxijn
 * @since 7/20/2025
 */
@Slf4j
@RestController
@RequestMapping("/board")
public class BoardController {

    BoardService boardService;

    BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping("/generate-game")
    public ResponseEntity<Board> generateGame(@RequestParam Integer rows, @RequestParam Integer columns) {
        return ResponseEntity.ok(boardService.generateGame(rows, columns));
    }

    @PostMapping("/check-matches")
    public ResponseEntity<DataResponse<Boolean>> checkMatches(@RequestBody Board board) {
//        return ResponseEntity.ok(new SwapRequest());
        return ResponseEntity.ok(boardService.checkMatches(board));
    }

    @PostMapping("/find-matches-swap")
    public ResponseEntity<?> findMatchesSwap(@RequestBody SwapRequest swapRequest) {
        log.info(swapRequest.toString());
//        return ResponseEntity.ok(new SwapRequest());
        return ResponseEntity.ok(boardService.findMatchesByIndexCell(new Board(swapRequest.getCells()), swapRequest.getFirstPair(), swapRequest.getSecondPair()));
    }

    @PostMapping("/find-matches")
    public ResponseEntity<List<Match>> findMatches(@RequestBody Board board) {
        log.info(board.toString());
        return ResponseEntity.ok(boardService.findMatches(board, false));
    }
}
