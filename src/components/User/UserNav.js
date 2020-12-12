import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';

import { ReactComponent as PhotosIcon } from '../../assets/feed.svg';
import { ReactComponent as StatsIcon } from '../../assets/estatisticas.svg';
import { ReactComponent as AddIcon } from '../../assets/adicionar.svg';
import { ReactComponent as LogoutIcon } from '../../assets/sair.svg';
import UseMedia from '../../hooks/useMedia';

const UserNav = () => {
    const { userLogout } = React.useContext(UserContext);
    const mobile = UseMedia('(max-width: 40rem)');
    const [mobileMenuActive, setMobileMenuActive] = React.useState(false);

    const { pathname } = useLocation();
    React.useEffect(() => {
        setMobileMenuActive(false);
    }, [pathname])

    return (
        <>
            { mobile && (
                <button 
                    className={`user__mobileButton ${mobileMenuActive && 'active'}`}
                    aria-label="menu"
                    onClick={() => setMobileMenuActive(!mobileMenuActive)}
                >
                </button>
            ) }

            <nav className={`${mobile ? 'user__nav-mobile' : 'user__nav'} ${mobileMenuActive && 'user__nav-mobile__active'}`}>
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
        </>
    )
}

export default UserNav;