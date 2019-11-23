import React ,{useRef, useImperativeHandle ,forwardRef} from 'react'

const Planet = (props,ref) => {
    const selectRef = useRef(null);
    useImperativeHandle(ref, () => ({
        load: () => {
            selectRef.current.focus();
            selectRef.current.value = 'default'
        }
      }));
    return (
        <div className= "planets form-group">
            <select onChange={ (e) => props.onInput(e.target.value)} defaultValue='default' ref={selectRef}>
                <option disabled value='default' >Planets</option>
                {props.planet.map( p => 
                    <option value={p.name} key={p.name} data-testid="planets">{p.name} {p.distance}</option>
                    )}
            </select>
        </div>
    )
}
export default forwardRef(Planet)