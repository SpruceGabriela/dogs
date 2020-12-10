import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginLost from './LoginLost';
import LoginReset from './LoginReset';

import { UserContext } from '../../UserContext';

const Login = () => {
    const { login } = React.useContext(UserContext);

    if(login === true) return <Navigate to="/account" />

    return (
       <div>
           <Routes>
               <Route path="/" element={ <LoginForm /> } />
               <Route path="create" element={ <LoginCreate /> } />
               <Route path="lost-password" element={ <LoginLost /> } />
               <Route path="reset-password" element={ <LoginReset/> } />
           </Routes>
       </div>
    )
}

export default Login;