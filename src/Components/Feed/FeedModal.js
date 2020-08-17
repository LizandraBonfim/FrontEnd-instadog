import React from 'react';
import Error from '../Error';
import Loading from '../Partials/Loading';
import PhotoContent from '../Photos/PhotoContent';
import styles from './styles.module.css';
import useKey from '../../hooks/useKey';
import useApi from '../../hooks/useApi';


function FeedModal({ photo, setModalPhoto }) {

    const { data, loading, error, request } = useApi();

    const { keyPressedEsc } = useKey({ keyWatch: 'Escape', eventName: 'keydown' });

    React.useEffect(() => {


        if (keyPressedEsc)
            setModalPhoto(null);

    }, [setModalPhoto, keyPressedEsc]);




    React.useEffect(() => {
        async function fetchPhotos() {

            const response = await request('get', `feed/photo/${photo.id}`);

            if (!response) throw new Error("Foto não disponivel ")

        }
        fetchPhotos();
    }, [photo.id, request]);

    function handleOutsideClick(event) {
        if (event.target === event.currentTarget)
            setModalPhoto(null);
    }




    return (
        <div className={styles.modal} onClick={handleOutsideClick}>
            {error && <Error error={error} />}
            {loading && <Loading />}

            {data &&
                <PhotoContent dados={data} />}
        </div>
    )
}

export default FeedModal
