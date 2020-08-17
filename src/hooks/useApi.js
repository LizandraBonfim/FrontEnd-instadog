import React, { useCallback } from 'react'
import api from '../service/api';

function useApi() {

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState([]);

    const request = useCallback(async (method, rota, params) => {
        let response = null;
        try {
            setError(null);
            setLoading(true);


            response = await api[`${method}`](rota, params);

            if (!response) throw new Error('ocorreu um erro no usepai');

            return response;



        } catch (err) {

            setLoading(false);
            setError(err.message);

        } finally {
            setLoading(false);
            setData(response?.data);

        }
    }, []);



    return { loading, error, data, request }
}

export default useApi;
