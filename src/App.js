import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Start from './components/Start/Start';
import Game from './components/Game/Game';

function App() {
  const [nameOne, setNameOne] = useState('');
  const [nameTwo, setNameTwo] = useState('');
  const [start, setStart] = useState(false);

  return <div className="App">
    {!start &&
      <Start nameOne={nameOne} setNameOne={setNameOne} nameTwo={nameTwo} setNameTwo={setNameTwo} setStart={setStart} />}
    {start &&
      <Game players={[nameTwo, nameOne]} setStart={setStart} />}
  </div>
}

export default App;
