import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FormLogin } from './styles';
import Input from '../Partials/Input';
import Button from '../Partials/Button/index';
import useForm from '../../hooks/useForm';
import Error from '../Error';
import api from '../../service/api';


export default function Cadastro() {

    const navigate = useNavigate();

    const name = useForm('nome');
    const email = useForm('email');
    const password = useForm('password');

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        const algumCampoInvalido = [
            email, password, name
        ]
            .map(x => x.validate())
            .some((x) => x === false);

        if (algumCampoInvalido)
            return;

        try {
            setLoading(true);
            // setError(null);

            await api.post('users', {
                name: name.value,
                email: email.value,
                password: password.value
            });


            navigate('/login');



        } catch (err) {
            setError("Ocorreu um erro ao realizar cadastro, tente mais tarde.");
        } finally {
            setLoading(false);

        }


    }


    return (
        <FormLogin className="animeLeft">
            <h1 className="title">Cadastre-se</h1>

            <form onSubmit={handleSubmit}>

                <Input
                    type="name"
                    label="Nome"
                    value={name}
                    {...name} />

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
                    ? <Button >Carregando...</Button>
                    : <Button >Cadastro</Button>
                }
            </form>


        </FormLogin>
    )
}
