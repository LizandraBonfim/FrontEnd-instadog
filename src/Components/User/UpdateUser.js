import React from 'react';
import Input from '../Partials/Input';
import Error from '../Error';
import { Button } from '../Partials/styles';
import useForm from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { AtualizarProfile } from './styles';
import { UserContext } from '../../UserStorage';

const UserPhotoPost = (props) => {

    const nome = useForm('nome');
    const password = useForm('password');
    const { updateUser } = React.useContext(UserContext);


    const { error, loading, request } = useApi();

    const navigate = useNavigate();


    React.useEffect(() => { }, []);

    async function handleSubmit(event) {
        event.preventDefault();


        if (nome.validate() || password.validate()) {

            const response = await request('put', `/profile/${props.data.id}`, {
                name: nome.value,
                password: nome.password,
            });

            if (response) {
                props.data.name = nome.value;

                await updateUser(props.data);

                navigate('/');
            }
        }


    }



    return (
        <>
            <AtualizarProfile className="animeLeft">


                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        label="Nome"
                        name="nome"
                        {...nome}

                    />

                    <Input
                        type="password"
                        label="Password"
                        name="password"
                        {...password}

                    />




                    <Error error={error} />

                    {loading
                        ? <Button disabled style={{ marginTop: "2rem" }}>Atualizando...</Button>
                        : <Button style={{ marginTop: "2rem" }}>Atualizar</Button>
                    }



                </form>




            </AtualizarProfile>

        </>
    )
}
export default UserPhotoPost;

