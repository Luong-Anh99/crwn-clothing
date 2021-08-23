import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as  Logo } from '../../assets/4.3 crown.svg'

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOPS
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
);

export default Header;