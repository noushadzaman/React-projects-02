import { useState } from "react";
import Board from "./Board";
import History from "./History";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [x, setX] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);
    const [draw, setDraw] = useState(false);

    const currentSquares = history[currentMove];

    const handlePlay = (nextSquares) => {
        setDraw(false);
        setX(!x);
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        if (nextHistory.length >= 10) {
            for (let i = 1; i <= 9; i++) {
                if (nextHistory[9][i] !== null) {
                    setDraw(true);
                }
            }
        }
    }

    const handleGoToHistory = (move) => {
        setDraw(false);
        setCurrentMove(move);
        setX(move % 2 === 0);
    }

    return (
        <div className="flex items-center justify-center gap-2">
            <Board x={x} squares={currentSquares} onPlay={handlePlay} draw={draw} />
            <div>
                <ol>

                </ol>
            </div>
            <History history={history} handleGoToHistory={handleGoToHistory} />
        </div>
    );
};

export default Game;