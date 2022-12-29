import React from "react";
import Square from "./square";

export default function Board(props) {
  console.log(`SQUARES = ${props.squares}`);

  return (
    <div>
      <div className="board-row">
        {renderSquare(props.squares, 0, props.game)}
        {renderSquare(props.squares, 1, props.game)}
        {renderSquare(props.squares, 2, props.game)}
      </div>
      <div className="board-row">
        {renderSquare(props.squares, 3, props.game)}
        {renderSquare(props.squares, 4, props.game)}
        {renderSquare(props.squares, 5, props.game)}
      </div>
      <div className="board-row">
        {renderSquare(props.squares, 6, props.game)}
        {renderSquare(props.squares, 7, props.game)}
        {renderSquare(props.squares, 8, props.game)}
      </div>
    </div>
  );
}

const renderSquare = (squares, i, game, hc) => {
  return <Square value={squares[i]} onClick={() => game.handleClick(i)} />;
};
