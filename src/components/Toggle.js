import '../styles/Toggle.css'

export default function Toggle(props){
    return(
        <span className='Toggle'>
            {props.first}
            <input type='checkbox' name={props.id} id={props.id} onChange={props.onChange}/>
            {props.second}
        </span>
    );
}