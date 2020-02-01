import React from "react";
import BoardView from "./Board";
import Square from "../Square/Square";

const BoardController = () => {
  const [boardData, changeBoardData] = React.useState([]);
  const [currentPlayer, changeCurrentPlayer] = React.useState("X");
  const [completedCombination, setCombination] = React.useState([]);
  const [status, setStatus] = React.useState(`Next player: ${currentPlayer}`);

  const checkIfCompleted = () => {
    let combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];

    combinations.forEach(combination => {
      let counter = 0;

      boardData.forEach(obj => {
        if (
          combination.includes(obj.index) &&
          obj.currentPlayer !== currentPlayer
        ) {
          counter++;

          if (counter === 3) {
            setCombination(combination);
            setStatus(`Player ${obj.currentPlayer} Wins !!`);
          }
        }
      });
    });
  };

  const checkIfExist = index => {
    let indexesArray = [];
    boardData.forEach(obj => indexesArray.push(obj.index));
    return indexesArray.includes(index);
  };

  const finishMove = () => {
    if (currentPlayer === "X") {
      changeCurrentPlayer("O");
    } else {
      changeCurrentPlayer("X");
    }
  };

  const handleSquareClick = index => {
    const newBoardData = [...boardData];
    newBoardData.push({ index, currentPlayer });

    if (completedCombination.length === 0) {
      changeBoardData(newBoardData);
    }

    finishMove();
  };

  const handleReset = () => {
    changeBoardData([]);
    setCombination([]);
    changeCurrentPlayer("X");
    setStatus(`Next player: X`);
  };

  const renderSquare = index => {
    let indexesArray = [];
    boardData.forEach(obj => indexesArray.push(obj.index));
    const filteredObject = boardData.find(obj => obj.index === index);

    return (
      <Square
        onClick={() =>
          !checkIfExist(index) &&
          completedCombination.length === 0 &&
          handleSquareClick(index)
        }
        squareIndex={index}
        checked={checkIfExist(index)}
        completed={completedCombination.includes(index)}
        currentPlayer={filteredObject && filteredObject.currentPlayer}
      />
    );
  };

  React.useEffect(() => {
    checkIfCompleted();

    if (boardData.length === 9) {
      setStatus(`It's a draw`);
    }

  }, [boardData]);

  return (
    <BoardView
      renderSquare={renderSquare}
      status={status}
      boardData={boardData}
      handleSquareClick={handleSquareClick}
      checkIfExist={checkIfExist}
      handleReset={handleReset}
      currentPlayer={currentPlayer}
    />
  );
};

export default BoardController;
