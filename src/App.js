import React, { useState } from 'react';

import './App.css';

import { Board } from './components/Board';
import History  from './components/History';
import StatusMess  from './components/StatusMess';
import { calculateWinner } from './CalculateWinnerFunction';

const newGame = [
  {board: Array(9).fill(null), 
    isXNext: true},
];

function App() {

  const [history, setHistory] = useState([ 
    {board: Array(9).fill(null), 
    isXNext: true},
  ]);
 const [currentMove, setCurrentMove] = useState(0);

 const current = history[currentMove]

  const {winner, winningSquares } = calculateWinner(current.board);

  const handleSquareClick = (position) => { 

      if( current.board[position] || winner ) {
          return;
      }

      setHistory((prev) => {

        const last = prev[prev.length - 1];

            const newBoard = last.board.map((square, pos) => {
                  if(pos === position) {
                      return  last.isXNext ? 'X' : '0';
                  }
                  return square;
              });
              return prev.concat({ board: newBoard, isXNext: !last.isXNext })
     });
     setCurrentMove(prev => prev + 1)
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  }

  const onNewGame = () => {
    setHistory(newGame)
    setCurrentMove(0);
  }

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMess winner={winner} current={current} />
     <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares} />
     <button type="button" onClick={onNewGame}>Start new game</button>
     <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
