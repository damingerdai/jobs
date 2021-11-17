import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	mode: 'light',
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleMode: (state, action) => {
			state.mode = action.payload
		},
	},
})

export const { actions, reducer: themeReducer } = themeSlice;
export const { toggleMode } = actions;

