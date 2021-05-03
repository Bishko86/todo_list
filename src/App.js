import React from 'react';
import './App.css';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer/Footer';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';


const App = () => (
  <div className={'baseWrap'}>
    <Header />
    <div>
      <AddTodo />
      <VisibleTodoList />
    </div>
    <Footer />

  </div>

)

export default App;