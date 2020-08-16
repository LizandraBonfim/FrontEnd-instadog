import React, { useState } from 'react'
import UserHeaderNav from './UserHeaderNav';
import { Header } from './styles';
import { useLocation } from 'react-router-dom';
import Head from '../Partials/Head';


function UserHeader() {

    const [title, setTitle] = useState('');
    const location = useLocation();

    React.useEffect(() => {
        switch (location.pathname) {
            case '/conta/new-post':
                setTitle("Adicionar foto");
                break;

            case '/conta/graph':
                setTitle("Estatisticas");
                break;

            default:
                setTitle("Minhas fotos");
                break;
        }
    }, [location])
    return (
        <Header>
            <Head title={title} />

            <h1 className="title">{title}</h1>
            <UserHeaderNav />
        </Header>
    )
}

export default UserHeader;
