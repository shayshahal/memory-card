import { useState } from 'react';
import '../styles/App.css';
import Settings from './Settings';

export default function App() {
  const [isSingleGame, setIsSingleGame] = useState(false);
  const [isDifficultyHard, setIsDifficultyHard] = useState(false);

  return (
    <div className="App"> 
      <header>
        <img alt='logo'/>
        <Settings 
          setIsGame={()=>{setIsSingleGame(!isSingleGame)}}
          setIsDifficulty={()=>{setIsDifficultyHard(!isDifficultyHard)}}
        />
      </header>
    </div>
  );
}