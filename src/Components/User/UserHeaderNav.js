import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserStorage';
import { ReactComponent as Feed } from '../../assets/feed.svg';
import { ReactComponent as Usuario } from '../../assets/usuario.svg';
import { ReactComponent as Estatisticas } from '../../assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../assets/adicionar.svg';
import { ReactComponent as Sair } from '../../assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../hooks/useMedia';

function UserHeaderNav() {

    const { singOut } = useContext(UserContext);
    const mobile = useMedia('(max-width: 40rem)');

    const [mobileMenu, setMobileMenu] = React.useState(false);
    const { pathname } = useLocation();

    React.useEffect(() => {
        setMobileMenu(false);

    }, [pathname]);

    return (
        <>

            {mobile &&
                <button
                    className={`${styles.mobileButton} ${mobileMenu ? styles.mobileButtonActive : ""}`}
                    aria-label="Menu"
                    onClick={() => setMobileMenu(!mobileMenu)
                    }>
                </button>
            }

            <nav className={`${mobile ? styles.navMobile : styles.nav} 
            ${mobileMenu && styles.navMobileMenu}`}>
                <NavLink to="/conta" end activeClassName={styles.active}>
                    <Feed />
                    {mobile && 'Minhas Fotos'}
                </NavLink>

                <NavLink to="/conta/atualizar" activeClassName={styles.active}>
                    <Usuario />
                    {mobile && 'Atualizar perfil'}
                </NavLink>

                <NavLink to="/conta/graph" activeClassName={styles.active}>
                    <Estatisticas />
                    {mobile && 'Estatisticas'}

                </NavLink>

                <NavLink to="/conta/new-post" activeClassName={styles.active}>
                    <AdicionarFoto />
                    {mobile && 'Adicionar foto'}


                </NavLink>

                <button onClick={singOut}>
                    <Sair />
                    {mobile && 'Sair'}

                </button>
            </nav>
        </>
    )
}

export default UserHeaderNav;
