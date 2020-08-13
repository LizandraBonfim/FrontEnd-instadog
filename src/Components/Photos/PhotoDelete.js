import React from 'react';
import { Button } from './styles';
import api from '../../service/api';
import Error from '../Error';

function PhotoDelete({ photo }) {

    const [error, setError] = React.useState(null);

    async function handleDelete() {

        const confirm = window.confirm('Está tentando excluir a foto? ');

        if (confirm) {
            try {

                console.log(photo)
                setError(false);
                const { response } = await api.delete(`delete/${photo}`);

                window.location.reload();
                console.log('excluida? ', response);
            } catch (err) {
                setError('Não foi possivel excluir a foto');

            }
        }
    }

    return (
        <>
            <Button onClick={handleDelete}>
                Deletar
        </Button>

            <Error error={error} />
        </>
    )
}

export default PhotoDelete
