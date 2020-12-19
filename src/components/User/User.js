import React from 'react';
import UserHeader from './UserHeader';
import { Routes, Route } from 'react-router-dom';

import Feed from '../Feed/Feed';
import PhotoPost from './PhotoPost';
import UserStats from './UserStats';

import './User.scss';
import { UserContext } from '../../UserContext';

const User = () => {
    const { data } = React.useContext(UserContext);

    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={ <Feed user={data.id} /> } />
                <Route path="post" element={ <PhotoPost /> } />
                <Route path="statistcs" element={ <UserStats /> } />
            </Routes>
        </section>
    );
}

export default User;