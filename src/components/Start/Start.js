import React, { useState } from 'react'

export default function Start({ nameOne, setNameOne, nameTwo, setNameTwo, setStart }) {
    return <div>
        <h2>Start New Game</h2>
        <form>
            <label>Choose player 1 name:</label>
            <input type="text" value={nameOne} onChange={(e) => setNameOne(e.target.value)} />
            <label>Choose player 2 name:</label>
            <input type="text" value={nameTwo} onChange={(e) => setNameTwo(e.target.value)} />
        </form>
        <button disabled={nameOne === nameTwo || nameOne === '' || nameTwo === ''} onClick={() => setStart(true)}>
            Start New Game
        </button>
    </div >
}
