import React from "react";
import Board from "./board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null), isX: true }],
    };
  }
  handleClick(i) {
    let newState = JSON.parse(
      JSON.stringify(this.state.history[this.state.history.length - 1])
    );

    if (calculateWinner(newState.squares) || newState.squares[i]) {
      return;
    }

    newState.squares[i] = newState.isX ? "X" : "O";
    const history = this.state.history.slice();
    history.push({ squares: newState.squares, isX: !newState.isX });
    this.setState({ history: history });
  }

  timeTravel(index) {
    console.log(`INDEX = ${index}`);
    this.setState({ history: this.state.history.slice(0, index + 1) });
  }

  render() {
    const winner = calculateWinner(
      this.state.history[this.state.history.length - 1].squares
    );
    let status;
    if (winner) {
      status = "Winner " + winner;
    } else {
      status = this.state.history[this.state.history.length - 1].isX
        ? "Next player: X"
        : "Next player: O";
    }

    const listItems = this.state.history.map((elem, index) => {
      return (
        <li key={index.toString()}>
          <button onClick={() => this.timeTravel(index)}>
            Go to move #{index}
          </button>
        </li>
      );
    });

    console.log(`LIST ITEMS = ${listItems}`);

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.history[this.state.history.length - 1].squares}
            game={this}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{listItems}</ol>
        </div>
      </div>
    );
  }
}

const calculateWinner = (squares) => {
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    const first = squares[a];
    const second = squares[b];
    const third = squares[c];
    if (first && first === second && first === third) {
      return first;
    }
  }
  return null;
};

export default Game;
