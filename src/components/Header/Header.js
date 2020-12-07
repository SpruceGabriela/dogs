import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login | Cadastrar</Link>
            </nav>
        </header>
    )
}

export default Header;