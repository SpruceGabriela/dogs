import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';

const LoginForm = () => {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userName,
                password: password
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json)
        })
    }

    return (
       <section>
           <h1>Login</h1>
           <form action="" onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    value={userName}
                    onChange={({ target }) => setUserName(target.value)}
                />
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                <Button>Entrar</Button>
           </form>
           <Link to="/login/create">Cadastro</Link>
       </section>
    )
}

export default LoginForm;