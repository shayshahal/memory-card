import {useState } from 'react';
import '../styles/Settings.css';
import GameToggle from './GameToggle';
import DifficultyToggle from './DifficultyToggle';

export default function Settings(props){
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const changeHandler = () => setIsSettingsOpen(!isSettingsOpen);


    return (
        <label htmlFor='settings-toggle' className='Settings'>
            settings
            <input onChange={changeHandler} id='settings-toggle' type='checkbox'/>
            {isSettingsOpen && 
                <div>
                    <GameToggle onChange={props.setIsGame}/>
                    <DifficultyToggle onChange={props.setIsDifficulty}/>
                </div>
            }
        </label>
    );
}