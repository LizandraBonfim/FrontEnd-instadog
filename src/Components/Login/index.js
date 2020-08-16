import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import Cadastro from './Cadastro';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import { UserContext } from '../../UserStorage';
import { LoginContent, Forms } from './styles';
import NotFound from '../NotFound';

export default function Login() {
    const { login } = React.useContext(UserContext);

    if (login === true) return <Navigate to="/conta" />
    return (
        <LoginContent>
            <Forms>


                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="cadastro" element={<Cadastro />} />
                    <Route path="reset" element={<ResetPassword />} />
                    <Route path="forgot" element={<ForgotPassword />} />
                    <Route path="*" element={<NotFound />} />

                </Routes>
            </Forms>
        </LoginContent>
    )
}
