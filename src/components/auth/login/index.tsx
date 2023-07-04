import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

const Login = () => {
	return (
		<>
			<Typography variant="h3" fontFamily="Popins" textAlign="center">
				Авторизация
			</Typography>
			<Typography variant="body1" textAlign="center">
				Введите ваш логин и пароль
			</Typography>
			;
			<TextField
				fullWidth={true}
				margin="normal"
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
			/>
			<TextField
				fullWidth={true}
				margin="normal"
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
			/>
			<Button variant="contained" sx={{ width: '50%', display: 'flex', alignSelf: 'center' }}>
				Войти
			</Button>
		</>
	);
};

export default Login;