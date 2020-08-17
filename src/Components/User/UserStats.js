import React, { useEffect } from 'react';
import useApi from '../../hooks/useApi';
import Error from '../Error';
import Loading from '../Partials/Loading';
const UserStatGrafic = React.lazy(() => import('./UserStatsGrafic'));

const UserStats = () => {


    const { request, data, error, loading } = useApi();


    useEffect(() => {
        async function api() {
            const token = localStorage.getItem('token');

            await request('get', '/conta/myphotos', token);

        }

        api();
    }, [request]);

    if (error) return <Error />
    if (loading) return <Loading />

    if (data)
        return (
            <React.Suspense fallback={<div></div>}>

                <UserStatGrafic data={data} />
            </React.Suspense>
        )

    else return null;
}

export default UserStats;

