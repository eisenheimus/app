import React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { IpropsLogin } from '../../../commons/types/auth';

const Login: React.FC<IpropsLogin> = (props: IpropsLogin): JSX.Element => {
	const { setPassword, setEmail }: IpropsLogin = props;

	return (
		<>
			<Typography variant="h3" fontFamily="Popins" textAlign="center">
				Авторизация
			</Typography>
			<Typography variant="body1" textAlign="center" marginTop="12px">
				Введите ваш логин и пароль
			</Typography>
			;
			<TextField
				fullWidth={true}
				margin="normal"
				id="outlined-basic"
				label="login"
				variant="outlined"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				type="password"
				fullWidth={true}
				margin="normal"
				id="outlined-basic"
				label="pswd"
				variant="outlined"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button
				type="submit"
				variant="contained"
				sx={{
					width: '50%',
					display: 'flex',
					height: '50px',
					margin: '15px auto 0 auto',
				}}>
				Войти
			</Button>
			<Typography variant="body2" textAlign="center" marginTop="18px">
				У вас нет аккаунта?{' '}
				<Link to="/register" className="link">
					регистрация
				</Link>
			</Typography>
		</>
	);
};

export default Login;
