import React from 'react';

import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

import './Feed.scss';

const Feed = ({ user }) => {
    const [modalPhoto, setModalPhoto] = React.useState(null);
    const [pages, setPages] = React.useState([1]);
    const [infinite, setInfinite] = React.useState(true);

    React.useEffect(() => {
        let isWait = false;
        const infiniteScroll = () => {
            if(infinite) {
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;

                if(scroll > height * .75 && !isWait) {
                    setPages((pages) => [...pages + pages.length + 1]);
                    isWait = true;
                    setTimeout(() => {
                        isWait = false;
                    }, 500);
                }
            }
        }

        window.addEventListener('wheel', infiniteScroll);
        window.addEventListener('scroll', infiniteScroll);

        return () => {
            window.removeEventListener('wheel', infiniteScroll);
            window.removeEventListener('scroll', infiniteScroll);
        };
    }, [infinite]);

    return (
        <div>
            {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
            {pages.map((page) => <FeedPhotos 
                key={page}
                user={user}
                page={page}
                setModalPhoto={setModalPhoto}
                setInfinite={setInfinite}
            />)}
        </div>
    )
}

export default Feed;