import {useState} from 'react';
import '../styles/Settings.css';
import GameToggle from './GameToggle';
import DifficultyToggle from './DifficultyToggle';

export default function Settings(props){
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const changeHandler = () => setIsSettingsOpen(!isSettingsOpen);


    return (
        <div className='Settings'>
            <input onChange={changeHandler} className='settingsToggle' type='checkbox'/>
            {isSettingsOpen && 
                <div className='expandedSettings'>
                    <GameToggle onChange={props.setIsGame}/>
                    <DifficultyToggle onChange={props.setIsDifficulty}/>
                </div>
            }
        </div>
    );
}