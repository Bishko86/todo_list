import React from 'react';
import style from './Todo.module.css';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);
const Todo = ({ deleteMode, editMode, text, completed, onClick, saveTodo, onChange, date, textValue, children }) => {
  const delete_animation = deleteMode ? 'delete_animation' : null;
  let className = cx({
    todo: true,
    delete_animation: delete_animation
  });
  return (
    <div className={style.todo_block}>
      <div onClick={onClick}
        className={className}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {editMode ? <textarea
          className={style.textarea}
          autoFocus
          onChange={onChange}
          value={textValue}
          onBlur={saveTodo} ></textarea> :
          <div>
            <p className={style.todo_text}>{text}</p>
            <div className={style.date}>{date}</div>
          </div>}
      </div >
      {children}
    </div>
  );
}

export default Todo;