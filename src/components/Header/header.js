import React from 'react';
import {Link} from 'react-router-dom'
import './header.scss';

const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <div className='logo'>THECBSTORE</div>
        </Link>
    <div className='options'>
        <Link to='/shop' className='option'>
            SHOP
        </Link>
        <Link to='/contact' className='option'>
            CONTACT
        </Link>
        <Link to='/signin' className='option'>
            SIGN IN
        </Link>
    </div>
    </div>
);

export default Header;