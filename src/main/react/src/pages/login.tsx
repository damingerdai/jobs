import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../slices/hook';
import { fetchToken, setUsername } from '../slices/login';

const Login: React.FC = () => {

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { username } = useAppSelector(state => state.login);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		// eslint-disable-next-line no-lone-blocks
		{
			event.preventDefault();
			const data = new FormData(event.currentTarget);
			const user = { username: data.get('username') as string, password: data.get('password') as string };
			dispatch(fetchToken(user));
			dispatch(setUsername(user.username));
		}
	}

	useEffect(() => {
		if (username?.trim()) {
			navigate('/');

		}
	}, [username])


	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
          Sign In {username}
				</Typography>
				<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin='normal'
						required
						fullWidth
						id='username'
						name='username'
						label='User Name'
						autoComplete='text'
						placeholder='username: admin'
						autoFocus
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						id='password'
						name='password'
						label='Password'
						type='password'
						autoComplete='current-password'
						placeholder='password: 12345'
					/>
					<FormControlLabel
						control={<Checkbox value='remeber' color='primary' />}
						label='Remember me'
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
					>
						{' '}
            Sign In
					</Button>
				</Box>
			</Box>
		</Container>
	);
}

export default Login;
