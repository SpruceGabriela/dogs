import React from 'react';

import Feed from '../Feed/Feed';
import './Home.scss';
import Head from '../../helper/Head';

const Home = () => {
    return (
        <section className="container container__main">
            <Head title="Feed" description="Feed do site Dogs" />
            <Feed />
        </section>
    )
}

export default Home;