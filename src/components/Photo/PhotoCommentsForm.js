import React from 'react';

import useFetch from '../../hooks/useFetch';
import Error from '../Error/Error';
import { ReactComponent as Send } from '../../assets/enviar.svg';

import { COMMENT_POST } from '../../api';

const PhotoCommentsForm = ({ id, setComments }) => {
    const {error, request} = useFetch();
    const [comment, setComment] = React.useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {url, options} = COMMENT_POST(id, {comment});

        const { response, json } = await request(url, options);        

        if(response.ok) {
            setComment('');
            setComments((comments) => [...comments, json]);
        }
    }
    
    return <form className="photo__comments-form" onSubmit={handleSubmit}>
        <textarea 
            className="photo__comments-form__textarea"
            id="comment"
            name="comment"
            placeholder="Comente..."
            value={comment}
            onChange={({target}) => setComment(target.value)}
        />
        <button className="photo__comments-form__send">
            <Send />
        </button>
        <Error error={error} />
    </form>
}

export default PhotoCommentsForm;