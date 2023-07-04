import * as React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Login from './login';
import Register from './register';
import { Box } from '@mui/material';
import './index.css';

const AuthRootComponent = () => {
	const location = useLocation();
	const [email, setEmail] = useState('');
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: { preventDefault: any }) => {
		e.preventDefault();

		console.log(email);
		console.log(login);
		console.log(password);
	};

	return (
		<div className="root">
			<form className="form" onSubmit={handleSubmit}>
				<Box>
					{location.pathname === '/login' ? (
						<Login setPassword={setPassword} setLogin={setLogin} />
					) : location.pathname === '/register' ? (
						<Register setEmail={setEmail} setLogin={setLogin} />
					) : (
						<h1> qwe </h1>
					)}
				</Box>
			</form>
		</div>
	);
};

export default AuthRootComponent;