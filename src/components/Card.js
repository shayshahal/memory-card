import '../styles/Card.css'

export default function Card(props){
    return (
        <button onClick={props.onClick} className='Card'>
            <img alt={props.champ.name} src={`ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.champ.name}_${props.champ.name}.jpg`}/>
            <span>{props.champ.name}, {props.champ.name}</span>
        </button>
    )
}