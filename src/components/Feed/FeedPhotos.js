import React from 'react';

import Error from "../../helper/Error/Error";
import Loading from '../Loading/Loading';
import FeedPhotosItem from './FeedPhotosItem';
import { PHOTOS_GET } from '../../api';
import UseFetch from '../../hooks/useFetch';

const FeedPhotos = ({ setModalPhoto }) => {
    const {data, loading, error, request} = UseFetch();

    React.useEffect(() => {
        const fetchPhotos = async () => {
            const {url, options} = PHOTOS_GET({ page: 1, total: 6, user: 0 });
            const {response, json} =  await request(url, options);
        } 
        fetchPhotos();
    }, [request]);

    if(error) return <Error error={error} />;
    if(loading) return <Loading />;
    if (data)
    return (
        <ul className="feed-photos animleft">
            {data.map((photo) => {
                return <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
            })}
        </ul>
    )
    else return null;
}

export default FeedPhotos;