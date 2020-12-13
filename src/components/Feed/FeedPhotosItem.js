import React from 'react';
import Shimmer from '../../helper/Shimmer/Shimmer';

const FeedPhotosItem = (props) => {
    const handleClick = () => {
        props.setModalPhoto(props.photo);
    }

    return (
        <li className="feed-photos__item" onClick={handleClick}>
            <Shimmer src={props.photo.src} alt={props.photo.title} />
            <span className="feed-photos__item-visible">{props.photo.acessos}</span>
        </li>
    )
}

export default FeedPhotosItem;