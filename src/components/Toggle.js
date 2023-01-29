import '../styles/Toggle.css'

export default function Toggle(props){

    return(
        <label className='Toggle' htmlFor={props.id}>
            {props.first}
            <input type='checkbox' id={props.id} onChange={props.onChange} checked/>
            {props.second}
        </label>
    );
}