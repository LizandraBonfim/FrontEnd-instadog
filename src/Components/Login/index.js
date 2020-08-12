import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import Cadastro from './Cadastro';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import { UserContext } from '../../UserStorage';
import { LoginContent, Forms } from './styles';

export default function Login() {
    const { login } = React.useContext(UserContext);

    if (login === true) return <Navigate to="/conta" />
    return (
        <LoginContent>
            <Forms>


                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="cadastro" element={<Cadastro />} />
                    <Route path="forgot" element={<ForgotPassword />} />
                    <Route path="reset" element={<ResetPassword />} />
                </Routes>
            </Forms>
        </LoginContent>
    )
}
