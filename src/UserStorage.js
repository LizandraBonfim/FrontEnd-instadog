import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from './service/api';
import { useCallback } from 'react';


export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {

    const navigate = useNavigate();

    const [data, setData] = React.useState(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;

            return { token, user: JSON.parse(user) }
        }
        return { token, user };
    });

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [login, setLogin] = React.useState(null);

    const singOut = useCallback(() => {
        try {

            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/login');

        } catch{
            setError('Erro ao realizar Logout');
            setLogin(false);

        } finally {

            setError(null);
            setLoading(false);
        }

        setData(null);
    }, [navigate]);

    const singIn = useCallback(async ({ email, password }) => {

        try {

            const response = await api.post('sessions', {
                email, password
            });

            const { token, user } = response.data;


            if (token === null || user === null) {
                setError('Usuario invalido');
                throw new Error('Usuario invalido');
            }


            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            api.defaults.headers.authorization = `Bearer ${token}`;

            navigate('/conta');



            setData({ token, user });
            setLoading(true);
            setLogin(true);


        } catch (error) {


            singOut();
            setError('Usuario invalido')

            setLoading(false);
        } finally {

        }

    }, [singOut, navigate]);



    const updateUser = useCallback(async (user) => {

        try {


            const local = localStorage.setItem('user', JSON.stringify(user));

            if (!local) {

                setError('dle');
                setData(null);
                throw new Error('');
            }

            setData({
                token: data.token,
                user
            });

            setLoading(true);
            setLogin(true);



        } catch{
            setError('Ocorreu um erro, favor tentar novamente');
        }

    }, [setData, data]);



    return (
        <UserContext.Provider value={{ data, singIn, singOut, updateUser, error, login, loading }}>
            {children}
        </UserContext.Provider>
    )
}


