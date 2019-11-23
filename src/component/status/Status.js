import React from 'react'
import ReactLoading from "react-loading";

const Status = props => {
    return (
        <div id="modal1" className="modal modal-backdrop">
            <div className="modal-header">
                <span role='button' onClick={()=> props.setToggle(false)}>X</span>
            </div>
            <div className="modal-content">
                {props.loading && <div className='loading'><ReactLoading type={"bars"} color={"black"} /></div>}
                {!props.loading && props.res.status === 'false' && <p>Oops! You missed falcon.</p>}
                {!props.loading && props.res.status === 'success' && <p>Yayy!! We found falcon on {props.res.planet_name} planet</p>}
            </div>
        </div>
    )
}
export default Status;