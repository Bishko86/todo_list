import React from 'react';
import style from './Todo.module.css';

const DeleteEditTodoBtn = ({ deleteMode, onClick, title, height, icon, SVG, size }) => {

  return (
    <div className={style.buttons} style={deleteMode ? { display: 'none' } : { display: 'block' }}>
      <span onClick={onClick} className={style.edit}>
        {SVG ? <SVG size={size} /> :
          <img title={title} height={height} src={icon} />
        }
      </span>
    </div>
  )

}

export default DeleteEditTodoBtn;