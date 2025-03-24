// Import the generated gRPC-Web client stubs and message classes
// import { ItemServiceClient } from './generated/item_grpc_web_pb';
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
import Shape from "./match3-game/shape.js";
import { Board } from './match3-game/index.js'
import './css/style.css';
import backgroundImage from './css/images/background/background_game.jpg';
const shape = new Shape();
document.body.style.backgroundImage = `url(${backgroundImage})`;
let board = new Board(ctx, shape);
// document.addEventListener('DOMContentLoaded', async () => {
//   await board.exportMatrix()
// });
window.onload = () => {
  board.exportMatrix()
};
canvas.addEventListener('click', (e) => {
  playGame(e)
  console.log('click canvas')
  board.resetTimer();
});
let preClicked;
function playGame(e) {
  var rect = canvas.getBoundingClientRect();
  const mousePos = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
  // Tính toán chỉ số hàng và cột
  var col = Math.floor(mousePos.x / board.BOX_SIZE); // Xác định cột
  var row = Math.floor(mousePos.y / board.BOX_SIZE); // Xác định hàng
  preClicked = board.actionClick(preClicked, col, row);

}