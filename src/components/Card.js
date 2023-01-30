import '../styles/Card.css'

export default function Card(props){
    return (
        <button onClick={props.onClick} className='Card'>
            <img alt={props.champ.name} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.champ.name}_${props.champ.skin}.jpg`}/>
            <span>{props.champ.name}, {props.champ.title}</span>
        </button>
    )
}