import * as React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Login } from './login';
import { Register } from './register';
import { Box } from '@mui/material';
import './styles/index.css';
import { instance } from '../../utils/axios/';

const AuthRootComponent = () => {
	const location = useLocation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [username, setUsername] = useState('');

	const [login, setLogin] = useState('');
	const handleSubmit = async (e: { preventDefault: any }): Promise<void> => {
		e.preventDefault();
		let data = {};

		if (location.pathname === '/login') {
			data = {
				email,
				password,
			};
		} else if (location.pathname === '/register') {
			if (password === repeatPassword) {
				data = {
					email,
					password,
					firstName,
					username,
				};
			} else throw new Error('Пароли не совпадают');
		}

		await instance.get('/login', data);
	};

	return (
		<div className="root">
			<form className="form" onSubmit={handleSubmit}>
				<Box>
					{location.pathname === '/login' ? (
						<Login setPassword={setPassword} setEmail={setEmail} />
					) : location.pathname === '/register' ? (
						<Register
							setEmail={setEmail}
							setLogin={setLogin}
							setPassword={setPassword}
							setRepeatPassword={setRepeatPassword}
							setFirstName={setFirstName}
							setUsername={setUsername}
						/>
					) : (
						<h1> qwe </h1>
					)}
				</Box>
			</form>
		</div>
	);
};

export { AuthRootComponent };
