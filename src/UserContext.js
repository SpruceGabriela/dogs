import React from 'react';
import { TOKEN_POST, USER_GET } from './api';

export const UserContext = React.createContext();

export const UserStorage = (props) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const getUser = async (token) => {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setLogin(true);
    }

    const userLogin = async (username, password) => {
        const {url, options} = TOKEN_POST({username, password});
        const tokenResponse = await fetch(url, options);
        const {token} = await tokenResponse.json();
        window.localStorage.setItem('token', token);
        getUser(token);
    }

    return (
        <UserContext.Provider value={{ userLogin, data }}>
            { props.children }
        </UserContext.Provider>
    )
}