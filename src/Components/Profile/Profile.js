import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../Feed/Feed';
import useApi from '../../hooks/useApi';
import Loading from '../Partials/Loading';
import NotFound from '../NotFound';
import Head from '../Partials/Head';

function Profile() {

    const { user } = useParams();

    const { loading, data, error, request } = useApi();

    React.useEffect(() => {

        async function fetch() {

            await request('get', `/photos/user/${user}`);
        }
        fetch();

    }, [request, user]);

    if (error) return <NotFound />
    if (loading) return <Loading />
    if (data)
        return (
            <section className="container mainContainer">
                <Head title={data.name} />
                <h1 className="title">{data.name}</h1>
                <Feed user={user} />
            </section>
        )
    else return null;


}

export default Profile;
