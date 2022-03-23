import React from 'react';
import logos from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logos} alt="" />
            <div><a href="/shop">shop</a><a href="/order">order</a><a href="/inventory">inventory</a><a href="/about">about</a></div>
        </nav>
    );
};

export default Header;