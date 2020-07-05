import React from 'react';
import {Link} from 'react-router-dom'
import './header.scss';
import {auth} from '../../firebase/firebase.utils'

const Header = ({CurrentUser}) => (
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
        {
            CurrentUser ?
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> 
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
    </div>
    </div>
);

export default Header;