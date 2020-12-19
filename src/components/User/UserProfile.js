import React from 'react';
import { useParams } from 'react-router-dom';

import Feed from '../Feed/Feed';
import Head from '../../helper/Head';

const UserProfile = () => {
    const {user} = useParams()

    return (
        <section className="container container__main">
            <Head title={user} />
            <h1 className="title">{user}</h1>
            <Feed user={user} />
        </section>
    )
}

export default UserProfile;