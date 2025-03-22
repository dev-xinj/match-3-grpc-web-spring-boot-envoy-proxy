// Import the generated gRPC-Web client stubs and message classes
// import { ItemServiceClient } from './generated/item_grpc_web_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Matrix, RowItem, Item } from './generated/item_pb';
import { Board } from './match3-game/index.js'
import './css/style.css';
import backgroundImage from './css/images/background/background_game.jpg';
import callBoard, { clearMatrix, getCurrentMatrix } from './match3-game/index.js';
document.body.style.backgroundImage = `url(${backgroundImage})`;
let board = new Board();
// document.addEventListener('DOMContentLoaded', async () => {
//   await board.exportMatrix()
// });
window.onload = () => {
  board.exportMatrix()
};
// document.addEventListener('click', async (e) => {
//   // await new Promise(resolve => setTimeout(resolve, 2000));
//   // let a = await scanMatrix(matrixService)
//   // console.log(a);
// })
