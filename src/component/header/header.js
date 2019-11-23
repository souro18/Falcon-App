import React , {useState} from 'react'
import './header.scss'

import Modal from './../modal/Modal'
import Guide from './../guide/Guide'
const Header = props => {
    const [toggle , setTogggle] =useState(false)
    return (
        <div id="header">
            <div className='links'>
                <div className='link' onClick={() => setTogggle(true)}>How to Play</div>
            </div>
            {toggle &&
                <Modal>
                    <Guide setToggle={setTogggle}/>
                </Modal>
             }
        </div>
    )
}
export default Header;