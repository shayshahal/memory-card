import { useState } from 'react'
import '../styles/ManyGame.css'
import '../styles/Game.css';
import Card from './Card';
import Score from './Score';

export default function ManyGame(props){
    const [currentChamps, setCurrentChamps] = useState(getRandomChamps())
    const [memory, setMemory] = useState(new Set());
    const [score, setScore] = useState(0);
    function getRandomChamps(n = 12){
        let result = new Array(n),
        len = props.champPull.length,
        taken = new Array(len);
        while (n--) {
            let x = ~~(Math.random() * len);
            result[n] = props.champPull[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }
    function lose(){
        setScore(0);
        setMemory(new Set());
    }
    function win(name){
        setScore(prev=>prev+1);
        setMemory(new Set(memory.add(name)))
    }
    function choiceHandler(e){
        if(memory.has(e.target.alt))
            lose();
        else
            win(e.target.alt);
        setCurrentChamps(getRandomChamps())
    }
    return (
        <div className='Game'>
            <div className='ManyGame'>{
                (currentChamps.map(champ=>{
                    console.log(champ.key)
                    return <Card
                                key={champ.key+champ.skin} 
                                champ={champ} 
                                onClick={choiceHandler}
                            />
                }))
            }</div>
            <Score score={score}/>
        </div>
    )
}