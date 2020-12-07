import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';

const Header = () => {
    return (
        <header className="header">
            <nav className="container header__nav">
                <Link className="header__logo" to="/" aria-label="Dogs - Home">
                    <Dogs />
                </Link>
                <Link className="header__login" to="/login">Login | Cadastrar</Link>
            </nav>
        </header>
    )
}

export default Header;