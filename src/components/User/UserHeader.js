import React from 'react';
import UserNav from './UserNav';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
    const [title, setTitle] = React.useState('');
    const location = useLocation();

    React.useEffect(() => {
        switch(location.pathname) {
            case '/account/post':
                setTitle('Poste sua Foto');
                break;
            case '/account/statistcs':
                setTitle('Estatísticas');
                break;
            default:
                setTitle('Minha Conta');
        }
            
    }, [location])

    return (
        <header className="user__header">
            <h1 className="title">{title}</h1>
            <UserNav />
        </header>
    )
}

export default UserHeader;