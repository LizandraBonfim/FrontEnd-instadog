import React from 'react';
import { FormComments } from './styles';
import { ReactComponent as Enviar } from '../../assets/enviar.svg';
import api from '../../service/api';
import Error from '../Error';

function PhotoCommentsForm({ id, setComments }) {

    const [comment, setComment] = React.useState('');
    const [error, setError] = React.useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        try {

            await api.post(`/comments/${id}`, { comment })
                .then(response => {
                    setComment('');
                    setComments((comments) => [...comments, response.data]);
                });


        } catch{
            setError("Ocorreu um erro, tente mais tarde.");

        } finally {
            setError(false);
        }


    }



    return (
        <FormComments onSubmit={handleSubmit}>

            <textarea
                value={comment}
                id="comment"
                placeholder="Deixe seu comentário..."
                name="comment"
                onChange={({ target }) => setComment(target.value)}
            />
            <Error error={error} />
            <button>
                <Enviar />
            </button>
        </FormComments>
    )
}

export default PhotoCommentsForm;
