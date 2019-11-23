import React from 'react';

const Guide = props => {
    return (
        <div id="modal1" className="modal modal-backdrop">
            <div className="modal-header">
                <span role='button' onClick={() => props.setToggle(false)}>X</span>
            </div>
            <div className="modal-content">
                <h3>How to play</h3>
                <div className='content'>
                    <p>In the planet of Lengaburu…in the distant distant galaxy of Tara B. After the recent war with neighbouring planet Falicornia, King Shan has exiled the Queen of Falicornia for 15 years.</p>
                    <p>Queen Al Falcone is now in hiding. But if King Shan can ﬁnd her before the years are up, she will be exiled for another 15 years….</p>
                    <p>King Shan has received intelligence that Al Falcone is in hiding in one of these 6 planets - DonLon, Enchai, Jebing, Sapir, Lerbin & Pingasor. However he has limited resources at his disposal & can send his army to only 4 of these planets. Every vehicle can travel a maximum distance.</p>
                    <p>You have to help King Shan ﬁnd Al Falcone.</p>
                </div>
            </div>
        </div>
    )
}

export default Guide;