import Toggle from "./Toggle";

export default function DifficultyToggle(props){
    return (
        <Toggle onChange={props.onChange} id="difficulty-toggle" first="Easy" second="Hard"/>
    )
}