import '../styles/Card.css'

export default function Card(props){
    return (
        <button onClick={props.onClick} className='Card'>
            <img alt={props.name} src={`ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.name}_${props.skin}.jpg`}/>
            <span>{props.name}, {props.title}</span>
        </button>
    )
}