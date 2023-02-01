import '../styles/Card.css'

export default function Card(props){
    return (
        <button onClick={props.onClick} className={props.onClick ? 'Card CardMany' : 'Card'}>
            <img alt={props.champ.name}
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.champ.name}_${props.champ.skin}.jpg`}/> 
        </button>
    )
}