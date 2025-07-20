package com.devxijn.game_service.controller;

import com.devxijn.game_service.entity.Board;
import com.devxijn.game_service.entity.Match;
import com.devxijn.game_service.service.BoardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author devxijn
 * @since 7/20/2025
 */
@RestController
@RequestMapping("/board")
public class BoardController {

    BoardService boardService;

    BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping("/generate-game")
    public ResponseEntity<Board> generateGame() {
        return ResponseEntity.ok(boardService.generateGame());
    }

    @GetMapping("/find-matches")
    public ResponseEntity<List<Match>> findMatches(){
        return ResponseEntity.ok(boardService.findMatches(boardService.generateGame()));
    }
}
