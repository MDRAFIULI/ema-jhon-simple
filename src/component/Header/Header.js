import React from 'react';
import { Link } from 'react-router-dom';
import logos from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logos} alt="" />
            <div>
                <Link to="/shop">shop</Link>
                <Link to="/order">order</Link>
                <Link to="/inventory">inventory</Link>
                <Link to="/about">about</Link>
                <Link to="/login"> Login</Link>
            </div>

        </nav>
    );
};

export default Header;