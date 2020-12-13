import React from 'react';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../hooks/useFetch';

const PhotoDelete = ({ id }) => {
    const {loading, request} = useFetch();

    const handleClick = async () => {
        const confirm = window.confirm('Tem certeza que deseja deletar?');
        if(confirm) {
            const {url, options} = PHOTO_DELETE(id);
            const { response } = await request(url, options);
            if(response.ok) {
                window.location.reload();
            }
        }
    }

    return (
        <>
            {loading ? <button
            className="photo__delete"
            disabled>
                Deletando...
            </button> 
            :
            <button
            className="photo__delete"
            onClick={handleClick}>
                Deletar
            </button>    
        }
        </>
    )
}

export default PhotoDelete;