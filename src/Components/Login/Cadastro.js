import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FormLogin } from './styles';
import Input from '../Partials/Input';
import Button from '../Partials/Button/index';
import useForm from '../../hooks/useForm';
import Error from '../Error';
import useApi from '../../hooks/useApi';
import Head from '../Partials/Head';


export default function Cadastro() {

    const navigate = useNavigate();

    const name = useForm('nome');
    const email = useForm('email');
    const password = useForm('password');

    const { loading, error, request } = useApi();


    async function handleSubmit(event) {
        event.preventDefault();

        const algumCampoInvalido = [
            email, password, name
        ]
            .map(x => x.validate())
            .some((x) => x === false);

        if (algumCampoInvalido)
            return;


        const dados = await request('post', 'users',

            {
                name: name.value,
                email: email.value,
                password: password.value
            }


        );

        if (!dados) {
            console.log('Ocorreu um erro');

            return null;
        }


        navigate('/login');

    }


    return (
        <FormLogin className="animeLeft">
            <Head title="Cadastro" />

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
                    : <Button >Cadastre-se</Button>
                }
            </form>


        </FormLogin>
    )
}
