import React from 'react';
import style from './Todo.module.css';

const Todo = ({ editMode, text, completed, onClick, saveTodo, onChange, date, textValue, children }) => {
  return (
    <div className={style.todo_block}>
      <div onClick={onClick}
        className={style.todo}
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