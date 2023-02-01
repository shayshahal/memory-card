import { useState } from 'react'
import '../styles/Score.css'

export default function Score(props){
    const [best, setBest] = useState(0);
    if(props.score > best)
        setBest(props.score);

    return (
        <div className='Score'>
            <div>Score: {props.score}</div>
            <div>Best: {best}</div>
        </div>
    )
}