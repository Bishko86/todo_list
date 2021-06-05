import React, { memo } from 'react';
import TodoBlock from "../Todo/TodoBlock"
import { PropTypes } from 'prop-types'
import style from './TodoList.module.css'
const TodoList = ({ todos, toggleTodo, removeTodo, saveEditTodo }) => {

    return (
        <div className={style.todo_list}>
            {todos.map((todo) => <TodoBlock
                {...todo}
                id={todo.id}
                key={todo.id}
                onClick={(e) => {
                    if (e.target.tagName === 'TEXTAREA') return;
                    toggleTodo(todo.id);
                }}
                onRemove={removeTodo}
                saveEditTodo={saveEditTodo}
            />
            )}
        </div>
    )
}

const TodoListWithMemo = memo(TodoList)
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,

        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoListWithMemo;