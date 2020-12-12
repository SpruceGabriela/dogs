import React from 'react';

const UseMedia = (media) => {
    const [match, setMatch] = React.useState(null);

    React.useEffect(() => {
        const changeMatch = () => {
            const { matches } = window.matchMedia(media);
            setMatch(matches);
        }
        changeMatch();
        window.addEventListener('resize', changeMatch);

        return () => {
            window.removeEventListener('resize', changeMatch);
        }
    }, [media])

    return match;
}

export default UseMedia;