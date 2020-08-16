import React from 'react';

import { useParams } from 'react-router-dom';
import Loading from '../Partials/Loading';
import PhotoContent from './PhotoContent';
import { PhotoSingle } from './styles';
import NotFound from '../NotFound';
import useApi from '../../hooks/useApi';
import Head from '../Partials/Head';

function Photo() {

    const { id } = useParams();

    const { data, loading, error, request } = useApi();

    React.useEffect(() => {
        async function fetch() {

            const response = await request('get', `feed/photo/${id}`);
            console.log(`response`, response)
        }
        fetch();

    }, [id, request]);


    if (error) return <NotFound />
    if (loading) return <Loading />

    if (data)
        return (
            <PhotoSingle className="container mainContainer">
                <Head title="Foto" />

                <PhotoContent dados={data} />
            </PhotoSingle>
        )

    else return null;
}

export default Photo
