import React from 'react';
import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';
import Error from '../Error/Error';

import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';

import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';

const PhotoPost = () => {
    const name = useForm();
    const weight = useForm('number');
    const age = useForm('number');
    const [img, setImg] = React.useState({});
    const {data, error, loading, request} = useFetch();
    const navigate = useNavigate();

    React.useEffect(() => {
        if(data) {
            navigate('/account');
        }
    }, [data, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('img', img.raw);
        formData.append('nome', name.value);
        formData.append('peso', weight.value);
        formData.append('idade', age.value);

        const token = window.localStorage.getItem('token');
        const { url, options } = PHOTO_POST(formData, token);
        request(url, options);
    }

    const handleImgChange = (event) => {
        setImg({
            preview: URL.createObjectURL(event.target.files[0]),
            raw: event.target.files[0],
        });
    }

    return (
        <section className="user__photopost animleft">
            <form onSubmit={handleSubmit}>
                <Input label="Nome" type="text" name="name" {...name} />
                <Input label="Peso" type="text" name="weight" {...weight} />
                <Input label="Idade" type="text" name="age" {...age} />
                <input className="user__photopost-file" type="file" name="img" id="img" onChange={handleImgChange}/>
                {loading ? <Button disabled>Enviando...</ Button> : <Button>Enviar</ Button>}
                <Error error={error} />
            </form>
            {img.preview && 
            <div 
                className="user__previewImg"
                style={{ backgroundImage: `url('${img.preview}')`}}
            >
            </div>
            }
        </section>
    )
}

export default PhotoPost;