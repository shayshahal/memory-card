import { useState } from 'react'
import '../styles/ManyGame.css'
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
        setMemory(prev=>prev.add(name))
    }
    function choiceHandler(name){
        if(memory.has(name))
            lose();
        else
            win();
        setCurrentChamps(getRandomChamps())
    }
    return (
        <div className='ManyGame'>
            <div className='Cards'>{
                (currentChamps.map(champ=>{
                    return <Card 
                                key={champ.key} 
                                champ={champ} 
                                onClick={choiceHandler}
                            />
                }))
            }</div>
            <Score score={score}/>
        </div>
    )
}