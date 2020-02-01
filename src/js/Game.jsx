import React from "react";
import Board from "./components/Board/Board.controller.jsx";
import "../scss/main.scss";
import "./Game.scss";

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game__board">
          <Board />
        </div>
      </div>
    );
  }
}
