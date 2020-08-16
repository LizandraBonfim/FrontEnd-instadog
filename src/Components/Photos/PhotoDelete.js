import React from 'react';
import { Button } from './styles';
import Error from '../Error';
import useApi from '../../hooks/useApi';

function PhotoDelete({ photo }) {

    const { error, request } = useApi();

    async function handleDelete() {

        const confirm = window.confirm('Está tentando excluir a foto? ');

        if (confirm) {

            await request('delete', `delete/${photo}`);

            window.location.reload();


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
