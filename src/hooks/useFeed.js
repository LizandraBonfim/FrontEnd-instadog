import React from 'react'
import api from '../service/api';

function useFeed({ rota, user = null }) {

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        async function fetchPhotos() {
            try {
                const response = await api.get(`${rota}`, {
                    params: {
                        page: 1,
                        items: 6,
                        user: user
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
    }, [rota, user]);

    return { loading, error, data }
}

export default useFeed
