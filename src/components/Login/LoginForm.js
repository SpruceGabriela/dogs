import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';
import useForm from '../../hooks/useForm';

import { UserContext } from '../../UserContext';

const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    const { userLogin, error, loading } = React.useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }

    return (
       <section>
           <h1>Login</h1>
           <form action="" onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    {...username}
                />
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    {...password}
                />
                {loading ? <Button disabled>Carregando</Button> : <Button>Entrar</Button>}
                {error && <p>{error}</p>}
           </form>
           <Link to="/login/create">Cadastro</Link>
       </section>
    )
}

export default LoginForm;