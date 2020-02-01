import React from "react";
import { Button } from "@rmwc/button";
import "./Board.scss";

const Board = props => (
  <div className="board">
    <div className="board__status">{props.status}</div>
    <Button onClick={() => props.handleReset()}>Reset</Button>

    <div className="board__board-row">
      {props.renderSquare(0)}
      {props.renderSquare(1)}
      {props.renderSquare(2)}
    </div>
    <div className="board__board-row">
      {props.renderSquare(3)}
      {props.renderSquare(4)}
      {props.renderSquare(5)}
    </div>
    <div className="board__board-row">
      {props.renderSquare(6)}
      {props.renderSquare(7)}
      {props.renderSquare(8)}
    </div>
  </div>
);

export default Board;
