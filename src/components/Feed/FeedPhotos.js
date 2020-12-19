import React from 'react';

import Error from "../../helper/Error/Error";
import Loading from '../../helper/Loading/Loading';
import FeedPhotosItem from './FeedPhotosItem';
import { PHOTOS_GET } from '../../api';
import UseFetch from '../../hooks/useFetch';

const FeedPhotos = ({ user, page, setModalPhoto, setInfinite }) => {
    const {data, loading, error, request} = UseFetch();

    React.useEffect(() => {
        const fetchPhotos = async () => {
            const total = 6;
            const {url, options} = PHOTOS_GET({ page: page, total: total, user: user });
            const { response, json } =  await request(url, options);

            if(response && response.ok && json.length < total) setInfinite(false);
        } 
        fetchPhotos();
    }, [request, user, page, setInfinite]);

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