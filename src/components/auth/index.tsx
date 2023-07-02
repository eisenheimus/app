import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Login from './login';
import Register from './register';

const AuthRootComponent = () => {
    const location = useLocation()
    return (
        location.pathname === '/login' ? <Login /> : (location.pathname === '/register' ? <Register /> : <h1> qwe </h1> )
    )
}

export default AuthRootComponent;