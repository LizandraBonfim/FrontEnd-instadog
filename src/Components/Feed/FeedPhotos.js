import React, { useEffect } from 'react';
import Error from '../Error';
import FeedPhotosItem from './FeedPhotosItem';
import Loading from '../Partials/Loading';
import styles from './styles.module.css';
import useFeed from '../../hooks/useFeed';

function FeedPhotos({ page, user, setModalPhoto, setInfinite }) {


    const { data, error, loading } = useFeed({ rota: 'feed', user, page: page });

    useEffect(() => {

        if (data.length < 6) setInfinite(false);
        else setInfinite(true);


    }, [data, setInfinite]);




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
