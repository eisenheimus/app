import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Login from './login';
import Register from './register';
import { Box } from '@mui/material';
import './index.css';

const AuthRootComponent = () => {
	const location = useLocation();
	return (
		<div className="root">
			<div className="form">
				<Box>
					{location.pathname === '/login' ? (
						<Login />
					) : location.pathname === '/register' ? (
						<Register />
					) : (
						<h1> qwe </h1>
					)}
				</Box>
			</div>
		</div>
	);
};

export default AuthRootComponent;