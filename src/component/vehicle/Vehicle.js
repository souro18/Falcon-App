import React from 'react'
import './vehicle.scss'

const Vehicle = props => {
    return (
        <div className="vehicles form-group" >
            {props.vehicle.map(v =>
                <div className='vehicle' key={v.name} data-testid="vehicle">
                    <input type='radio' value={v.name} name={'vehicle' + props.id} key={props.name} disabled={v.total_no === 0 || props.distance === 0 || props.distance > v.max_distance} onClick={e => props.onInput(e.target.value)} />
                    <label>
                        <span>{v.name}</span><br/>
                        <span>No. of vehicle: {v.total_no}</span><br />
                        <span>Max Distance: {v.max_distance}</span>
                    </label>
                </div>
            )}
        </div>
    )
}
export default Vehicle;