import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import style from './Todo.module.css'

const Todo = React.memo(({ id, text, completed, onClick, onRemove, saveEditTodo }) => {
    let [textValue, setTextValue] = useState(text)
    let [editMode, setEditMode] = useState(false)
    const onChange = (e) => {
        setTextValue(e.target.value);

    }
    const saveTodo = (e) => {
        return setTimeout(() => {
            saveEditTodo(id, textValue);
            setEditMode(node => !node);
        }, 300)
    }

    return (
        <>
            <li onClick={onClick}
                className={style.todo_block}
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                    textAlign: 'left',
                    padding: '5px 0 5px 20px '
                }}
            >
                {editMode ? <input
                    autoFocus
                    type="text"
                    className={style.edit_field}
                    onChange={onChange}
                    value={textValue}
                    onBlur={saveTodo} /> : text}

            </li>
            <span onClick={onRemove} className='close'>X</span>
            {editMode ?
                <span className='save'>Save</span> :
                <span onClick={(e) => { e.stopPropagation(); setEditMode(node => !node) }} className='edit'>
                    Edit</span>
            }
            <br />
        </>
    )
})


Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo;