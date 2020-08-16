import React from 'react';
import { FormComments } from './styles';
import { ReactComponent as Enviar } from '../../assets/enviar.svg';
import Error from '../Error';
import useApi from '../../hooks/useApi';

function PhotoCommentsForm({ id, setComments }) {

    const [comment, setComment] = React.useState('');
    const { error, request } = useApi();

    async function handleSubmit(event) {
        event.preventDefault();


        await request('post', `/comments/${id}`, { comment })
            .then(response => {
                setComment('');
                setComments((comments) => [...comments, response.data]);
            });

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
