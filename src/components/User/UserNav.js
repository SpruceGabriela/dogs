import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';

import { ReactComponent as PhotosIcon } from '../../assets/feed.svg';
import { ReactComponent as StatsIcon } from '../../assets/estatisticas.svg';
import { ReactComponent as AddIcon } from '../../assets/adicionar.svg';
import { ReactComponent as LogoutIcon } from '../../assets/sair.svg';

const UserNav = () => {
    const [mobile, setMobile] = React.useState(null);
    const { userLogout } = React.useContext(UserContext);

    return (
        <nav className="user__nav">
            <NavLink to="/account" end activeClassName="active">
                <PhotosIcon />
                {mobile && 'Minhas Fotos'}
            </NavLink>
            <NavLink to="/account/statistcs" activeClassName="active">
                <StatsIcon />
                {mobile && 'Estatísticas'}
            </NavLink>
            <NavLink to="/account/post" activeClassName="active">
                <AddIcon />
                {mobile && 'Postar'}
            </NavLink>
            <button onClick={userLogout}>
                <LogoutIcon />
                {mobile && 'Sair'}
            </button>
        </nav>
    )
}

export default UserNav;