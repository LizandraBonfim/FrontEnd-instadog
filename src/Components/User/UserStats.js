import React, { useEffect } from 'react';
import useApi from '../../hooks/useApi';
import Error from '../Error';
import Loading from '../Partials/Loading';
const UserStatGrafic = React.laze(() => import('./UserStatsGrafic'));

const UserStats = () => {


    const { request, data, error, loading } = useApi();


    useEffect(() => {
        async function api() {
            const token = localStorage.getItem('token');

            const response = await request('get', '/conta/myphotos', token);

            console.log('response', response)
        }

        api();
    }, [request]);

    if (error) return <Error />
    if (loading) return <Loading />

    if (data)
        return (
            <div>

                <UserStatGrafic data={data} />
            </div>
        )

    else return null;
}

export default UserStats;

