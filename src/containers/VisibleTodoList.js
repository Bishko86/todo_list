
import { connect } from 'react-redux';
import { toggleTodo, removeTodo, editTodo, saveEditTodo } from './../actions';
import TodoList from './../components/TodoList/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed)
    }

}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (id) => {
            dispatch(toggleTodo(id))
        },
        removeTodo: (id) => {
            dispatch(removeTodo(id))
        },
        saveEditTodo: (id, text) => {
            dispatch(saveEditTodo(id, text))
        }
    }
}
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
export default VisibleTodoList