import Toggle from "./Toggle";

export default function GameToggle(props){
    return (
        <Toggle onChange={props.onChange} id="game-toggle" first="Many" second="Single"/>
    )
}