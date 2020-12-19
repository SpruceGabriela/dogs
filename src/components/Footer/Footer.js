import React from 'react';

import './Footer.scss';
import {ReactComponent as Dogs} from '../../assets/dogs-footer.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <Dogs />
            <p>
                Dogs. Alguns direitos reservados
            </p>
        </footer>
    )
}

export default Footer;