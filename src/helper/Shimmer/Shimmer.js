import React from 'react';

import './Shimmer.scss';

const Shimmer = ({ alt, ...props }) => {
    const [shimmer, setShimmer] = React.useState(true);

    const handleLoad = (event) => {
        setShimmer(false);
        event.target.style.opacity = 1;
    }

    return <div className="shimmer-wrapper">
        { shimmer && <div className="shimmer"></div> }
        <img onLoad={handleLoad} className="img" alt={alt} {...props} />
    </div>
}

export default Shimmer;