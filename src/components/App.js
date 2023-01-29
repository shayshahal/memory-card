import { useState } from 'react';
import '../styles/App.css';

function useToggle({firstFn, secondFn}){
  const [isFirst, setIsFirst] = useState(true);
  function toggler(){
    const next = !isFirst;
    setIsFirst(next);
    next ? firstFn() : secondFn();
  }
  return [isFirst, toggler];
}

export default function App() {


  return (
    <div className="App"> 
    </div>
  );
}