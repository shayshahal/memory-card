import { useState, useEffect } from 'react';
import '../styles/App.css';
import ManyGame from './ManyGame';
import Settings from './Settings';
import SingleGame from './SingleGame';

function transformObject(obj, isEasy){
  let res = [];
  for (let i = 0; i < (isEasy?1:obj.skins.length); i++) {
    res.push({
        name: obj.id,
        key: obj.key,
        skin: obj.skins[i].num
      }
    )
  }
  return res;
}

export default function App() {
  const [isSingleGame, setIsSingleGame] = useState(false);
  const [champPull, setChampPull] = useState([]);
  const [isDifficultyEasy, setIsDifficultyEasy] = useState(false)
  useEffect(() => {
    const controller = new AbortController();
    async function fetchChamps(){
      const response = await fetch('https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/championFull.json', {signal: controller.signal});
      const data = await response.json();
      let res = [];
      for(const v of Object.values(data.data)){
        res = [...res, ...transformObject(v, isDifficultyEasy)]
      }
      setChampPull(res);
    }
    fetchChamps().catch(()=>console.log('Canceled fetch!'));
    return () => {
      controller.abort();
    }
  },[isDifficultyEasy])
  
  return (
    <div className="App"> 
      <header>
        <span className='logo'/>
        <Settings 
          setIsGame={()=>{setIsSingleGame(!isSingleGame)}}
          setIsDifficulty={()=>{setIsDifficultyEasy(!isDifficultyEasy)}}
        />
      </header>
      {isSingleGame 
        ?
          (champPull.length && <SingleGame champPull={champPull}/>)
        :
          (champPull.length && <ManyGame champPull={champPull}/>)
      }
      <footer>
        <span>©Shay Shahal</span>
        <a className='githubLogo' href='https://github.com/shayshahal/memory-card' alt='my-github'> </a>
      </footer>
    </div>
  );
}