import React from 'react';
import style from './Todo.module.css';

const DeleteEditTodoBtn = ({ onClick, title, height, icon }) => {

  return (
    <div className={style.buttons}>
      <span onClick={onClick} className={style.edit}>
        <img title={title} height={height} src={icon} />
      </span>
    </div>
  )

}

export default DeleteEditTodoBtn;