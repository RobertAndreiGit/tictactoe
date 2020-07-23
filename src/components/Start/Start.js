import React, { useState } from 'react'

import './Start.css';

export default function Start({ nameOne, setNameOne, nameTwo, setNameTwo, setStart }) {
    return <div>
        <h1>Start New Game</h1>
        <form>
            <div>
                <label>Choose player 1 name: </label>
                <input type="text" value={nameOne} onChange={(e) => setNameOne(e.target.value)} />
            </div>
            <div>
                <label>Choose player 2 name: </label>
                <input type="text" value={nameTwo} onChange={(e) => setNameTwo(e.target.value)} />
            </div>
        </form>
        <button disabled={nameOne === nameTwo || nameOne === '' || nameTwo === ''} onClick={() => setStart(true)} className="gameButton">
            Start New Game
        </button>
    </div >
}
