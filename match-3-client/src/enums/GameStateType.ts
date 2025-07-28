export enum GameStateType {
  WaitingState = 'WAITING_STATE', //chờ thao tác
  MatchingState = 'MATCHING_STATE', //kiểm tra và xử lý khớp
  DropState = 'DROP_STATE', //loại bỏ item khớp
  FallingState = 'FALLING_STATE', //xử lý rơi xuống
  FillingState = 'FILLING_STATE', //tạo item mới
  SwapingState = 'SWAPING_STATE', //tạo item mới
  SwapFailingState = 'SWAP_FALLING_STATE', //tạo item mới
  GameOverState = 'GAMEOVER_STATE' // kết thúc game
}
