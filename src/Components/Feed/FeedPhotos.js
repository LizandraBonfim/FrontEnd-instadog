import React from 'react';
import api from '../../service/api';
import Error from '../Error';
import FeedPhotosItem from './FeedPhotosItem';
import Loading from '../Partials/Loading';
import styles from './styles.module.css';

function FeedPhotos({ setModalPhoto }) {


    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        async function fetchPhotos() {
            try {
                const response = await api.get('feed', {
                    params: {
                        page: 1,
                        items: 6
                    }
                });

                if (!response) throw new Error("Não há fotos disponiveis")

                setData(response.data);
            } catch (err) {
                setError("Ocorreu um erro, tente novamente");
            } finally {
                setLoading(false);

            }

        }
        fetchPhotos();
    }, []);

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
