import React from 'react';

import useFetch from '../../hooks/useFetch';
import Loading from '../Loading/Loading';
import  Error from '../Error/Error';
import { PHOTO_GET } from '../../api';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = (props) => {
    const {data, error, loading, request} = useFetch();

    React.useEffect(() => {
        const { url, options } = PHOTO_GET(props.photo.id);
        request(url, options);
    }, [props.photo, request])

    const handleOutsideClick = (event) => {
        if(event.target === event.currentTarget) {
            props.setModalPhoto(null);
        }
    }

    return (
        <div className="feed-photos__modal" onClick={handleOutsideClick}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}
        </div>
    )
}

export default FeedModal;