import React from 'react';
import UserHeader from './UserHeader';
import { Routes, Route } from 'react-router-dom';

import Feed from '../Feed/Feed';
import PhotoPost from './PhotoPost';
import UserStats from './UserStats';

import './User.scss';

const User = () => {
    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={ <Feed /> } />
                <Route path="post" element={ <PhotoPost /> } />
                <Route path="statistcs" element={ <UserStats /> } />
            </Routes>
        </section>
    );
}

export default User;