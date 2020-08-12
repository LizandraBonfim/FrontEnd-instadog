import React from 'react';
import Input from '../Partials/Input';
import Error from '../Error';
import { Button } from '../Partials/styles';
import useForm from '../../hooks/useForm';
import api from '../../service/api';
import { UserPhostContent, Preview } from './styles';
import { useNavigate } from 'react-router-dom';


const UserPhotoPost = () => {

    const nome = useForm();
    const idade = useForm();
    const peso = useForm();
    const [img, setImg] = React.useState({});

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();


    React.useEffect(() => { }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();

        formData.append('avatar', img.raw);
        formData.append('nome', nome.value);
        formData.append('idade', idade.value);
        formData.append('peso', peso.value);

        if (!formData) {
            return nome.validate();
        }

        try {
            setLoading(true);
            setError(null);

            await api.post('post', formData)

            navigate('/');


        } catch (err) {
            setError(err.response.data.message)
        } finally {
            setLoading(false);

        }

    }

    function handleImgChange({ target }) {
        setImg({
            raw: target.files[0],
            preview: URL.createObjectURL(target.files[0])
        })
    }


    return (
        <>
            <UserPhostContent className="animeLeft">
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        label="Nome"
                        name="nome"
                        {...nome}
                    />

                    <Input
                        type="number"
                        label="Idade"
                        name="idade"
                        {...idade}

                    />

                    <Input
                        type="number"
                        label="Peso"
                        name="peso"
                        {...peso}

                    />
                    <label htmlFor="img">+</label>

                    <input
                        style={{ display: "none" }}
                        type="file"
                        name="img"
                        id="img"
                        onChange={handleImgChange}
                        {...img}

                    ></input>

                    <Error error={error} />

                    {loading
                        ? <Button disabled style={{ marginTop: "2rem" }}>Enviando...</Button>
                        : <Button style={{ marginTop: "2rem" }}>Postar</Button>
                    }



                </form>

                {img.preview && <Preview style={{ backgroundImage: `url(${img.preview})` }}>

                </Preview>
                }


            </UserPhostContent>

        </>
    )
}
export default UserPhotoPost;

