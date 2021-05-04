import React, { memo } from 'react';
import Todo from "../Todo/Todo"
import { PropTypes } from 'prop-types'
import style from './TodoList.module.css'
const TodoList = ({ todos, toggleTodo, removeTodo, saveEditTodo }) => {

    return (

        <ul className={style.todo_list}>
            {todos.map((todo) => <Todo
                {...todo}
                key={todo.id}
                onClick={() => toggleTodo(todo.id)}
                onRemove={() => removeTodo(todo.id)}
                saveEditTodo={saveEditTodo}
            />
            )}
        </ul>
    )
}

const TodoListWithMemo = React.memo(TodoList)
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