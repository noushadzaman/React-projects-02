import Square from './Square'
import { calculateWinner } from './CalculateWinner';

function Board({ x, squares, onPlay, draw }) {
  const winner = calculateWinner(squares);
  let status = "Playing as:";
  let player;

  if (winner) {
    status = `Player ${x ? "O" : "X"} has won!`;
  } else {
    status = `Playing as:`;
    player = x ? "X" : "O";
  }

  const handleSquareClick = (i) => {
    if (squares[i] || winner) {
      return
    }
    const nextSquares = [...squares];
    if (x) {
      nextSquares[i] = "X";
    }
    else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <div className='flex h-[100vh] flex-col justify-center items-center'>
      {
        !draw && <h2 className='text-3xl mb-6'>{status} <span
          className={`${x ? 'text-cyan-400' : 'text-rose-400'}`}>
          {winner === null && player}
        </span>
        </h2>
      }
      {
        draw && <h2 className='text-3xl mb-6'>Match is Drawn</h2>

      }      <div className='flex flex-col justify-center items-center'>
        <div className='flex'>
          <Square value={squares[0]} handleSquareClick={() => handleSquareClick(0)}></Square>
          <Square value={squares[1]} handleSquareClick={() => handleSquareClick(1)}></Square>
          <Square value={squares[2]} handleSquareClick={() => handleSquareClick(2)}></Square>
        </div>
        <div className='flex'>
          <Square value={squares[3]} handleSquareClick={() => handleSquareClick(3)}></Square>
          <Square value={squares[4]} handleSquareClick={() => handleSquareClick(4)}></Square>
          <Square value={squares[5]} handleSquareClick={() => handleSquareClick(5)}></Square>
        </div>
        <div className='flex'>
          <Square value={squares[6]} handleSquareClick={() => handleSquareClick(6)}></Square>
          <Square value={squares[7]} handleSquareClick={() => handleSquareClick(7)}></Square>
          <Square value={squares[8]} handleSquareClick={() => handleSquareClick(8)}></Square>
        </div>
      </div>
    </div>
  )
}

export default Board
