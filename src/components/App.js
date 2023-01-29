import { useState } from 'react';
import '../styles/App.css';
import Settings from './Settings';

export default function App() {
  const [isManyGame, setIsManyGame] = useState(true);
  const [isDifficultEasy, setIsDifficultyEasy] = useState(true);

  return (
    <div className="App"> 
    <Settings 
      setIsGame={()=>{setIsManyGame(!isManyGame)}}
      setIsDifficulty={()=>{setIsDifficultyEasy(!isDifficultEasy)}}
    />
    </div>
  );
}