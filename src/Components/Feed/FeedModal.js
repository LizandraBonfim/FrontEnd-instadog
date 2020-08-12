import React from 'react';
import api from '../../service/api';
import Error from '../Error';
import Loading from '../Partials/Loading';
import PhotoContent from '../Photos/PhotoContent';
import styles from './styles.module.css';


function FeedModal({ photo, setModalPhoto }) {

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        async function fetchPhotos() {
            try {


                const response = await api.get(`feed/photo/${photo.id}`);

                if (!response) throw new Error("Foto não disponivel ")

                setData(response.data);
                console.log('responssssssssse', response.data)

            } catch (err) {
                setError(err.response.data.message)
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
                <PhotoContent data={data} />}
        </div>
    )
}

export default FeedModal
