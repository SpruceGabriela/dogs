import React from 'react';

import { PASSWORD_LOST } from '../../api';

import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';

import Error from '../../helper/Error/Error';
import Head from '../../helper/Head';

const LoginLost = () => {
    const login = useForm();
    const {data, loading, error, request} = useFetch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(login.validate) {
            const { url, options } = PASSWORD_LOST({
                login: login.value,
                url: window.location.href.replace('lost-password', 'reset-password')
            });
    
            const {json} = await request(url, options);
        }
    }

    return (
       <section>
           <Head title="Perdeu a Senha?" />
           <h1 className="title">Perdeu a senha?</h1>
            {data ? <p style={{color: '#4C1'}}>{data}</p> 
            : 
            <form onSubmit={handleSubmit}>
               <Input
                    label="Email / Usuário"
                    type="text"
                    name="email"
                    {...login}
               />
               {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar Email</Button>}
           </form>
           }
           <Error error={error} />
       </section>
    )
}

export default LoginLost;