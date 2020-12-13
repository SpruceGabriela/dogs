import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';
import useForm from '../../hooks/useForm';
import Error from '../../helper/Error/Error';

import { UserContext } from '../../UserContext';

import './Login.scss';
import '../../components/Form/Button/Button.scss';

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
       <section className="animleft">
           <h1 className="title">Login</h1>
           <form className="form" onSubmit={handleSubmit}>
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
                {error && <Error error={error} />}
           </form>
           <Link className="retrieve" to="/login/retrieve">Perdeu a senha?</Link>

            <div className="login">
                <h2 className="login__subtitle">Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className="button" to="/login/create">Cadastro</Link>
            </div>
       </section>
    )
}

export default LoginForm;