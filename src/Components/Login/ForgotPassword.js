import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Error from '../Error';
import Input from '../Partials/Input';
import Button from '../Partials/Button/index';
import useForm from '../../hooks/useForm';
import useApi from '../../hooks/useApi';
import { MessageSuccess } from './styles';
import Head from '../Partials/Head';

function ForgotPassword() {
    const email = useForm('email');
    const { loading, error, request } = useApi();
    const [enviado, setEnviado] = useState(false);


    async function handleSubmit(event) {
        event.preventDefault();

        if (email.validate()) {
            const response = await request('post', 'forgot',
                { email: email.value }
            );


            if (response) {
                setEnviado(true);

                localStorage.setItem('Reset:token', response.data.token);
                localStorage.setItem('Reset:user', JSON.stringify(response.data.user));

            }
        } else {
            setEnviado(false);

        }

    }

    return (
        <section>
            <Head title="Esqueceu a senha" />

            <h1 className="title">Esqueceu a senha?</h1>

            <form onSubmit={handleSubmit} >
                <Input
                    name="email"
                    label="Digite seu e-mail"
                    type="email"
                    {...email}
                />
                <Error error={error} />

                {enviado && (

                    <MessageSuccess>
                        Email enviado  <br></br>
                        <Link to="/login/reset">
                            Clique aqui para resetar
                        </Link>
                    </MessageSuccess>

                )}
                {loading
                    ? <Button >Carregando...</Button>
                    : <Button >Enviar</Button>
                }
            </form>
        </section>
    )
}

export default ForgotPassword
