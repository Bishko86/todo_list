import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeleteEditTodoBtn from './DeleteEditTodoBtn';
import { BsXCircle } from "react-icons/bs";
import { GrEdit, GrAddCircle } from "react-icons/gr";
import Todo from './Todo';
import Modal from './../Modal/Modal';

const TodoBlock = React.memo(({ id, text, completed, onClick, onRemove, saveEditTodo, date }) => {

    const [modalActive, setModalActive] = useState(false)
    const [textValue, setTextValue] = useState(text)
    const [editMode, setEditMode] = useState(false)
    const [deleteMode, setDeleteMode] = useState(false)

    const onChange = (e) => {
        setTextValue(e.target.value);
    }

    const deleteTodo = () => {
        setModalActive(false);
        setDeleteMode(true);
        setTimeout(() => onRemove(id), 300)
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
            {modalActive && <Modal modalActive={modalActive} ok={deleteTodo} cancel={() => setModalActive(false)} />}
            <Todo
                deleteMode={deleteMode}
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
                    deleteMode={deleteMode}
                    onClick={() => setModalActive(true)}
                    title='Remove todo'
                    height={22}
                    icon={null}
                    SVG={BsXCircle} />

                {
                    editMode ?
                        <DeleteEditTodoBtn
                            deleteMode={deleteMode}
                            onClick={null}
                            size={20}
                            SVG={GrAddCircle} /> :
                        <DeleteEditTodoBtn
                            deleteMode={deleteMode}
                            onClick={() => { setEditMode(node => !node) }}
                            size={20}
                            SVG={GrEdit} />
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