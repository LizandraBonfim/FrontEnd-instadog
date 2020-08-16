import React from 'react';
import { Link } from 'react-router-dom';

import { FormLogin, Cadastro } from './styles';
import Input from '../Partials/Input';
import Button from '../Partials/Button/index';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserStorage';
import Error from '../Error';
import Head from '../Partials/Head';

function LoginForm() {
    const email = useForm('email');
    const password = useForm();

    const { singIn, error, loading } = React.useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();

        if (email.validate() && password.validate()) {
            singIn({ email: email.value, password: password.value });
        }
    }


    return (
        <FormLogin className="animeLeft">
            <Head title="Login" />
            <h1 className="title">Login</h1>

            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    label="E-mail"
                    value={email}
                    {...email} />

                <Input
                    type="password"
                    label="Password"
                    value={password}
                    {...password} />

                <Error error={error} />

                {loading
                    ? <Button >Carregando</Button>
                    : <Button >Entrar</Button>
                }
            </form>

            <Link to="/login/forgot">Perdeu a senha? </Link>

            <Cadastro>


                <h2>Cadastre-se</h2>
                <p>Ainda nao possui cadastro? </p>

                <Button>
                    <Link to="/login/cadastro" style={{ color: '#764701' }} >Cadastro</Link>
                </Button>
            </Cadastro>

        </FormLogin>
    )
}

export default LoginForm
