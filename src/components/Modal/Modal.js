import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.css';

const Modal = (props) => {

  return (
    <div className={style.mod_block} onClick={props.cancel}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()} >
        <h3>Delete todo ?</h3>
        <div className={style.answer}>
          <button onClick={props.ok} className={style.button}>Delete</button>
          <button onClick={props.cancel} className={style.button}>Cancel</button>
        </div>
      </div>
    </div>

  )
}

const Parent = ({ ...props }) => {
  const container = document.createElement('div');

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');
    modalRoot.appendChild(container)
    return () => modalRoot.removeChild(container);
  }, [container])
  return (
    ReactDOM.createPortal(
      <Modal {...props}></Modal>,
      container
    ))
}
export default Parent;