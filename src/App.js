import React, { useEffect, useState } from 'react';
import './App.css';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer/Footer';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';
import { connect } from 'react-redux';


const App = ({ todos }) => {

  let [emptyListMode, setEmptyListMode] = useState(false);

  useEffect(() => {
    if (todos.length > 0) setEmptyListMode(false);
    else setEmptyListMode(true);
  }, [todos]);

  return (
    < div className={'baseWrap'} >
      <Header />

      <div className={'currentWrap'}>
        <AddTodo />
        {emptyListMode ? <h2>Your todo list is empty.</h2> :
          <div>
            <Footer />
            <VisibleTodoList />
          </div>}
      </div>


    </div >
  )
}
function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}
export default connect(mapStateToProps, null)(App);