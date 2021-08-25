import React from 'react';

import {connect} from 'react-redux'

import { Link } from 'react-router-dom';

import { ReactComponent as  Logo } from '../../assets/4.3 crown.svg'

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({currentUser}) => (
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
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                    </div>
                :
                <Link className='option' to='/signin'>
                    SIGN IN        
                </Link>
            }
        </div>
    </div>
);


const mapStateToProps = (state) =>({                         //this naming can be anything but mapStateToProps is standard with redux codebase
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);