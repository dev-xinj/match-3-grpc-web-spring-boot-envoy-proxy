export enum GameState {
  WaitingState, //chờ thao tác
  MatchingState, //kiểm tra và xử lý khớp
  DropState, //loại bỏ item khớp
  FallingState, //xử lý rơi xuống
  FillingState, //tạo item mới
  GameOverState // kết thúc game
}
