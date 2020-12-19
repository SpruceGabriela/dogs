import React from 'react';
import Head from '../../helper/Head';
import useFetch from '../../hooks/useFetch';
import { GET_STATS } from '../../api';

import Error from '../../helper/Error/Error';
import Loading from '../../helper/Loading/Loading';

const UserStatsGraph = React.lazy(() => import('../User/UserStatsGraph'));

const UserStats = () => {
    const {data, error, loading, request} = useFetch();

    React.useEffect(() => {
        const getData = async () => {
            const { url, options } = GET_STATS();
            request(url, options);
        }
        getData();
    }, [request]);

    if(error) return <Error />
    if(loading) return <Loading />
    if(data)
        return (
            <React.Suspense fallback={<div></div>}>
                <Head title="Estatísticas" />
                <UserStatsGraph data={data} />
            </React.Suspense>
        )
    else return null;
}

export default UserStats;