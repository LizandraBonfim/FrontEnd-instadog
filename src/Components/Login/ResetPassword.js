import React from 'react'
import { Link } from 'react-router-dom';

import Input from '../Partials/Input';
import Button from '../Partials/Button/index';
import useForm from '../../hooks/useForm';
import useApi from '../../hooks/useApi';
import { MessageSuccess } from './styles';
import Head from '../Partials/Head';

function ResetPassword() {
    const password = useForm('password');
    const { data, loading, request } = useApi();
    const [enviado, setEnviado] = React.useState(false);
    const [error, setError] = React.useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        if (password.validate()) {
            setEnviado(false);
            setError(false);

            const token = localStorage.getItem('Reset:token');
            const user = localStorage.getItem('Reset:user');


            const userId = JSON.parse(user);

            console.log('data', data);

            try {

                await request('post', `/reset/${userId.id}/token/${token}`, {
                    password: password.value
                });
                setEnviado(true);
                window.localStorage.removeItem('Reset:token');
                window.localStorage.removeItem('Reset:user');

            } catch{
                setEnviado(false);
                setError(true);

            }

        }

    }

    return (
        <section>
            <Head title="Reset" />

            <h1 className="title">Nova senha</h1>

            <form onSubmit={handleSubmit} >
                <Input
                    type="password"
                    label="Password"
                    value={password}
                    {...password} />

                {error &&
                    <p className="error" style={{ marginBottom: '1rem' }}>Token inválido. </p>
                }

                {enviado &&
                    <MessageSuccess>
                        Senha alterada com sucesso.
                        <br></br>
                        <Link to="/login/">
                            Realize o login.
                         </Link>
                    </MessageSuccess>


                }
                {loading
                    ? <Button >Carregando...</Button>
                    : <Button >Enviar</Button>
                }
            </form>
        </section>
    )
}

export default ResetPassword
