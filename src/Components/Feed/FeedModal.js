import React from 'react';
import api from '../../service/api';
import Error from '../Error';
import Loading from '../Partials/Loading';
import PhotoContent from '../Photos/PhotoContent';
import styles from './styles.module.css';
import useKey from '../../hooks/useKey';


function FeedModal({ photo, setModalPhoto }) {

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState([]);
    const { keyPressed } = useKey({ keyWatch: 'Escape', eventName: 'keydown' });

    React.useEffect(() => {
        console.log(keyPressed)
        if (keyPressed)
            setModalPhoto(null);

    }, [setModalPhoto, keyPressed]);

    React.useEffect(() => {
        async function fetchPhotos() {
            try {


                const response = await api.get(`feed/photo/${photo.id}`);

                if (!response) throw new Error("Foto não disponivel ")

                setData(response.data);

            } catch (err) {
                setError("Favor realizar login")
            } finally {
                setLoading(false);

            }

        }
        fetchPhotos();
    }, [photo.id]);

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
