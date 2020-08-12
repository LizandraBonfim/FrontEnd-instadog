import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerHeader, Login } from './styles';
import logo from '../assets/dogs.svg';
import { UserContext } from '../UserStorage';

function Header() {

    const { data } = React.useContext(UserContext);

    return (
        <ContainerHeader  >

            <nav className="container">

                <Link to="/" >
                    <img src={logo} alt="" />
                </Link>

                <Login>
                    {data && data.user?.name
                        ? <Link to="conta" > {data.user.name} </Link>
                        : <Link to="login" > Login | Criar </Link>
                    }
                </Login>
            </nav>
        </ContainerHeader>
    )
}

export default Header;
