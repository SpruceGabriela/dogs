import React from 'react';

import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = (props) => {
    const [comments, setComments] = React.useState(() => props.comments);
    const {login} =React.useContext(UserContext);

    const commentSection = React.useRef();
    React.useEffect(() => {
        commentSection.current.scrollTop = commentSection.current.scrollHeight;
    }, [comments])

console.log(comments);


    return (
        <>
            <ul ref={commentSection} className="photo__comments">
                {comments.map(comment => <li key={comment.comment_ID}>
                        <b>{comment.comment_author}:</b>
                        <span>{comment.comment_content}</span>
                    </li>)}
            </ul>
            {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
        </>
    )
}

export default PhotoComments;