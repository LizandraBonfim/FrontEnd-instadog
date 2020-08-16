import React, { useCallback, useEffect } from 'react';

import FeedPhotosItem from './FeedPhotosItem';
import Error from '../Error';
import Loading from '../Partials/Loading';
import styles from './styles.module.css';
import useApi from '../../hooks/useApi';

function FeedPhotos({ page, user, setModalPhoto, setInfinite }) {


    const { data, loading, error, request } = useApi();


    const atualizarPagina = useCallback(() => {

        setInfinite(false);

        if (data.length < 6) setInfinite(false);
        else setInfinite(true);

    }, [data.length, setInfinite])

    useEffect(() => {


        async function fetchPhoto() {

            await request('get', '/feed',
                {
                    params: {
                        page: page,
                        items: 6,
                        user: user
                    }
                }

            );

            atualizarPagina();


        }

        fetchPhoto();

    }, [atualizarPagina, page, request, user]);




    if (error) return <Error error={error} />
    if (loading) return <Loading />

    if (data)
        return (
            <ul className={`${styles.feed} animeLeft`}>

                {data.map(photo => (
                    <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
                ))}
            </ul>
        )
    else return null;
}

export default FeedPhotos;
