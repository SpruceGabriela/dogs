import React from 'react';

import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';
import useForm from '../../hooks/useForm';
import Error from '../../helper/Error/Error';

import useFetch from '../../hooks/useFetch';
import { PASSWORD_RESET } from '../../api';
import { useNavigate } from 'react-router-dom';
import Head from '../../helper/Head';

const LoginReset = () => {
    const [login, setLogin] = React.useState(null);
    const [key, setKey] = React.useState(null);
    const password = useForm();
    const {error, loading, request} = useFetch();
    const navigate = useNavigate();

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        const login = params.get('login');

        if(key) setKey(key);
        if(login) setLogin(login);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password.validate()) {
            const { url, options } = PASSWORD_RESET({
                login,
                key,
                password: password.value,
            });
    
            const {response} = await request(url, options);
    
            if(response.ok) {
                navigate('/login');
            }
        }
    }

    return (
       <section className="animleft">
           <Head title="Resete a senha" />
           <h1 className="title">Resete a senha</h1>
        
           <form onSubmit={handleSubmit}>
               <Input
                    label="Nova senha"
                    type="password"
                    name="password"
                    {...password}
               />
               {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
           </form>
           <Error error={error} />
       </section>
    )
}

export default LoginReset;