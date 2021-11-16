import { createSlice } from '@reduxjs/toolkit'
interface LoginState {
	username: string
}

const initialState: Partial<LoginState> = {
	username: '',
}

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername: (state, action) => {
			state.username = action.payload
			return state
		},
	},
})

export const { actions, reducer: loginReducer } = loginSlice
export const { setUsername } = actions
