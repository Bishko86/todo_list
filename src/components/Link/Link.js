import React from 'react';
import { PropTypes } from 'prop-types';
import style from './../Footer/Footer.module.css'

const Link = ({ active, children, onClick }) => {
    console.log(active);

    let selected = active ? 'select' : null;
    return (
        <button className={style[selected] + ' ' + style.filter_btn}
            onClick={onClick}
            disabled={active}
            style={{ marginLeft: '4px' }}
        >
            {children}
        </button>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link;