import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../service/api';

export const fetchToken = createAsyncThunk('login/fetchToken', async (args: { username: string, password: string }, thunkApi) => {
	const { username, password } = args;
	const usertoken = await api.login(username, password);
	api.setToken(usertoken.token);
	thunkApi.dispatch(loginSlice.actions.setUsername(username));
	return usertoken;
})

interface LoginState {
	username: string;
	token: string;
	refreshToken: string;
	exp: Date;
}

const inMemeryInitialState = localStorage.getItem('login') ? JSON.parse(localStorage.getItem('login') || '') : {};

const initialState: Partial<LoginState> = {
	username: '',
	token: '',
	refreshToken: '',
	...inMemeryInitialState
}

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername: (state, action) => {
			state.username = action.payload
			return state
		},
		setUserToken: (state, action) => {
			state.token = action.payload.token;
			state.refreshToken = action.payload.refreshToken;
			state.exp = action.payload.exp;
			return state;
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchToken.fulfilled, (state, action) => {
			state.token = action.payload.token;
			state.refreshToken = action.payload.refreshToken;
			state.exp = action.payload.exp;
			localStorage.setItem('login', JSON.stringify(state, null, 2));
			api.setToken(action.payload.token);
		})
		builder.addCase(fetchToken.rejected, (state, action) => {
			console.error(state, action)
		})
	}
})

export const { actions, reducer: loginReducer } = loginSlice;
export const { setUsername } = actions;


