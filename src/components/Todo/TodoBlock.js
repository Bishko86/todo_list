import React, { useState } from 'react';
import PropTypes from 'prop-types';
import deleteIcon from './delete512.png';
import editIcon from './edit-round-line.png';
import saveIcon from './save-512.png';
import DeleteEditTodoBtn from './DeleteEditTodoBtn';
import Todo from './Todo';

const TodoBlock = React.memo(({ id, text, completed, onClick, onRemove, saveEditTodo, date }) => {

    let [textValue, setTextValue] = useState(text)
    let [editMode, setEditMode] = useState(false)

    const onChange = (e) => {
        setTextValue(e.target.value);

    }
    const saveTodo = () => {
        return setTimeout(() => {
            saveEditTodo(id, textValue);
            setEditMode(node => !node);
        }, 200)
    }

    return (
        <div style={{
            margin: 'auto'

        }}>
            <Todo
                editMode={editMode}
                text={text}
                completed={completed}
                onClick={onClick}
                date={date}
                saveTodo={saveTodo}
                onChange={onChange}
                textValue={textValue}
            >
                <DeleteEditTodoBtn
                    onClick={onRemove}
                    title='Remove todo'
                    height={22}
                    icon={deleteIcon} />

                {
                    editMode ?
                        <DeleteEditTodoBtn
                            onClick={null}
                            title='Save todo'
                            height={22}
                            icon={saveIcon} /> :
                        <DeleteEditTodoBtn
                            onClick={() => { setEditMode(node => !node) }}
                            title="Edit todo"
                            height={22}
                            icon={editIcon} />
                }

            </Todo>
        </div>
    );
}
);

TodoBlock.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoBlock;