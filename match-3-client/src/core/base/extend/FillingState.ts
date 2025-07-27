import { GameState } from "../GameState";
import { MatchingState } from "./MatchingState";

export class FillingState extends GameState{
  public enter(): void {
    console.log('Enter FillingState')
    this.context.board.fillEmptyCells()
  }
  public update(deltaTime: number): void {
    if(this.context.board.isFillingComplete()){
      this.context.setState(new MatchingState())

    }
  }
  public exit(): void {
    EventBus.publish('FillingEvent')
  }
  
}