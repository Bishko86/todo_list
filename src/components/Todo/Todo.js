import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import style from './Todo.module.css';
import deleteIcon from './delete512.png';
import editIcon from './edit-round-line.png';
import saveIcon from './save-512.png';

const Todo = React.memo(({ id, text, completed, onClick, onRemove, saveEditTodo, date }) => {

    let [textValue, setTextValue] = useState(text)
    let [editMode, setEditMode] = useState(false)

    const onChange = (e) => {
        setTextValue(e.target.value);

    }
    const saveTodo = () => {
        return setTimeout(() => {
            saveEditTodo(id, textValue);
            setEditMode(node => !node);
        }, 100)
    }

    return (
        <>
            <li onClick={onClick}
                className={style.todo_block}
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                    minHeight: '25px',
                    padding: '5px 0 5px 20px ',
                }}
            >
                {editMode ? <input
                    className={style.textarea}
                    autoFocus
                    type="text"
                    className={style.edit_field}
                    onChange={onChange}
                    value={textValue}
                    onBlur={saveTodo} /> : <div><p className={style.todo_text}>{text}</p> <div className={style.date}>{date}</div></div>}

            </li>
            <span onClick={onRemove} className={style.close}><img height={22} src={deleteIcon} /></span>
            {
                editMode ?
                    <span className={style.save}>   <img title={'Save todo'} height={22} src={saveIcon} /></span> :
                    <span onClick={(e) => { e.stopPropagation(); setEditMode(node => !node) }} className={style.edit}>
                        <img title={'Edit todo'} height={22} src={editIcon} /></span>
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