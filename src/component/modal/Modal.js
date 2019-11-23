import React from 'react';
import ReactDOM from 'react-dom';
import './modal.scss'

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
	render() {
		return ReactDOM.createPortal(
            <div className='modal-container'>{this.props.children}</div>
            ,modalRoot);
	}
}
export default Modal;