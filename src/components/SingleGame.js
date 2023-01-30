import { useState } from 'react';
import '../styles/SingleGame.css';
import '../styles/Game.css';
import Card from './Card';
import Score from './Score';

export default function SingleGame(props){
    const [currentChamp, setCurrentChamp] = useState(getRandomChamp())
    const [memory, setMemory] = useState(new Set());
    const [score, setScore] = useState(0);
    
    function getRandomChamp(){
        return props.champPull[~~(Math.random()*props.champPull.length)]
    }
    function lose(){
        setScore(0);
        setMemory(new Set());
    }
    function win(){
        setScore(prev=>prev+1);
        setMemory(prev=>prev.add(currentChamp))
    }
    function choiceHandler(isSeen){
        if(isSeen === memory.has(currentChamp))
            win();
        else
            lose();
        setCurrentChamp(getRandomChamp());
    }
    return (
        <div className='Game'>
            <div className={'SingleGame'}>
                <Card champ={currentChamp}/>
                <button onClick={()=>{choiceHandler(true)}}>Seen</button>            
                <button onClick={()=>{choiceHandler(false)}}>New</button>
            </div>
            <Score score={score}/>
        </div>
    )
}