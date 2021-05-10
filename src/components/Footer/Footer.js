import React from 'react';
import FilterLink from './../../containers/FilterLink';
import style from './Footer.module.css'
const Footer = () => {
    return (
        <footer className={style.footer}>

            <FilterLink filter="SHOW_ALL">
                All
    </FilterLink>

            <FilterLink filter="SHOW_ACTIVE">
                Active
    </FilterLink>

            <FilterLink filter="SHOW_COMPLETED">
                Completed
    </FilterLink>

        </footer>

    )
}
export default Footer;