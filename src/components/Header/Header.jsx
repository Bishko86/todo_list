import React from 'react';
import style from './Header.module.css';

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.header_block}>
        <h1>Your Todo List</h1>
      </div>
    </header>
  )
}
export default Header;