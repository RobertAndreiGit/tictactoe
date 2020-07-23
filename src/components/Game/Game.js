import React, { useState, useEffect } from 'react'
import './Game.css';

export default function Game({ players, setStart }) {
    const [gameArr, setGameArr] = useState(['', '', '', '', '', '', '', '', '', 0]);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [inProgress, setInProgress] = useState(true);

    const handleClick = (position) => {
        if (!inProgress)
            return;
        console.log(gameArr[position]);
        if (gameArr[position] === '') {
            let toPut = currentPlayer === 0 ? '0' : 'X';
            setGameArr(old => old.map((v, i) => i === 9 ? position : i === position ? toPut : v));
        }
    }
    /*
    0 1 2
    3 4 5
    6 7 8
    */
    const checkIfWon = () => {
        let index = gameArr[9];
        let toCheck = currentPlayer === 0 ? '0' : 'X';
        for (let i = 0; i < 3; i++) {
            if (gameArr[i * 3 + index % 3] != toCheck)
                break;
            if (i === 2)
                return true;
        }


        for (let i = 0; i < 3; i++) {
            console.log(i + Math.floor(index / 3));
            if (gameArr[i + Math.floor(index / 3) * 3] != toCheck)
                break;
            if (i === 2)
                return true;
        }

        if (index === 0 || index === 4 || index === 8) {
            if (gameArr[0] === gameArr[4] && gameArr[4] === gameArr[8] && gameArr[4] === toCheck)
                return true;
        }

        if (index === 2 || index === 4 || index === 6) {
            if (gameArr[2] === gameArr[4] && gameArr[4] === gameArr[6] && gameArr[4] === toCheck)
                return true;
        }

        return false;
    }

    useEffect(() => {
        if (checkIfWon()) {
            setInProgress(false);
        } else {
            setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
        }
    }, [gameArr])

    const restartGame = () => {
        setInProgress(true);
        setCurrentPlayer(0);
        setGameArr(['', '', '', '', '', '', '', '', '', 0]);
    }

    return <div>
        {inProgress && <p>Current Player: {players[currentPlayer]}</p>}
        {!inProgress && <p>{players[currentPlayer]} won!</p>}

        <div className="gameboard">
            <div onClick={() => handleClick(0)}>{gameArr[0]}</div>
            <div onClick={() => handleClick(1)}>{gameArr[1]}</div>
            <div onClick={() => handleClick(2)}>{gameArr[2]}</div>
            <div onClick={() => handleClick(3)}>{gameArr[3]}</div>
            <div onClick={() => handleClick(4)}>{gameArr[4]}</div>
            <div onClick={() => handleClick(5)}>{gameArr[5]}</div>
            <div onClick={() => handleClick(6)}>{gameArr[6]}</div>
            <div onClick={() => handleClick(7)}>{gameArr[7]}</div>
            <div onClick={() => handleClick(8)}>{gameArr[8]}</div>
        </div>
        <div>
            <button onClick={() => restartGame()}>Restart Game</button>
            <button onClick={() => setStart(false)}>New Game</button>
        </div>
    </div>
}
