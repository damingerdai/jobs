import { configureStore } from '@reduxjs/toolkit'

import { loginReducer } from './login'
import { reposReducer } from './repos'
import themeReducer from './theme'

export const store = configureStore({
	reducer: {
		login: loginReducer,
		repos: reposReducer,
		theme: themeReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// Ignore these action types
				ignoredActions: ['login/fetchToken/fulfilled'],
				// Ignore these field paths in all actions
				ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
				// Ignore these paths in the state
				ignoredPaths: ['items.dates'],
			},
		}),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
