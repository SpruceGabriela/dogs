import React from 'react';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';

import './Photo.scss';

const PhotoContent = (props) => {
    const { photo, comments } = props.data;
    return (
        <div className="photo">
             <div className="photo__img">
                 <img src={photo.src} alt={photo.title} />
            </div>
            <div className="photo__details">
                <div>
                    <p className="photo__author">
                        <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
                        <span className="photo__access">{photo.acessos}</span>
                    </p>
                    <h1 className="title">
                        <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
                    </h1>
                    <ul className="photo__attributes">
                        <li>{photo.peso}kg</li>
                        <li>{photo.idade}anos</li>
                    </ul>
                </div>
            </div>
            <PhotoComments id={photo.id} comments={comments} />
        </div>
    )
}

export default PhotoContent;