import { Button, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { IpropsRegister } from '../../../commons/types/auth';

const Register: React.FC<IpropsRegister> = (props: IpropsRegister): JSX.Element => {
	const {
		setLogin,
		setEmail,
		setUsername,
		setFirstName,
		setRepeatPassword,
		setPassword,
	}: IpropsRegister = props;

	return (
		<>
			<Typography variant="h3" fontFamily="Popins" textAlign="center">
				Регистрация
			</Typography>
			<Typography variant="body1" textAlign="center" marginTop="12px">
				Введите данные для регистрации
			</Typography>
			;
			<TextField
				fullWidth={true}
				margin="normal"
				id="outlined-basic"
				label="Имя"
				variant="outlined"
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				margin="normal"
				id="outlined-basic"
				label="Username"
				variant="outlined"
				onChange={(e) => setUsername(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				margin="normal"
				id="outlined-basic"
				label="email"
				variant="outlined"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				margin="normal"
				id="outlined-basic"
				label="Password"
				variant="outlined"
				type="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				margin="normal"
				id="outlined-basic"
				label="Repeat password"
				variant="outlined"
				type="password"
				onChange={(e) => setRepeatPassword(e.target.value)}
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
				У вас есть аккаунт?{' '}
				<Link to="/login" className="link">
					авторизация
				</Link>
			</Typography>
		</>
	);
};

export { Register };
