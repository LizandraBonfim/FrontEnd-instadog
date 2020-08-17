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


        setError(null);
        setLogin(false);
        navigate('/login');
        setData(null);
        setLoading(false);
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user');

    }, [navigate]);

    const singIn = useCallback(async ({ email, password }) => {

        try {
            setLoading(true);


            const { statusText, data } = await api.post('sessions', {
                email, password
            });

            const { token, user } = data;


            if (statusText !== "OK") {
                setError('Usuario invalido');
                throw new Error('Usuario invalido');
            }


            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            api.defaults.headers.authorization = `Bearer ${token}`;

            navigate('/conta');



            setData({ token, user });
            setLogin(true);


        } catch (error) {


            singOut();
            setError('Usuario invalido')

            setLoading(false);
        }

    }, [singOut, navigate]);



    const updateUser = useCallback(async (user) => {

        try {

            setLoading(true);

            localStorage.setItem('user', JSON.stringify(user));

            setData({
                token: data.token,
                user
            });

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


