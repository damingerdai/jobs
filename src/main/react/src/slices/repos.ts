import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../lib/api'
import { ReposCommits } from '../types/respo'
import { RequestStatus } from '@/types/request-status'

export const fetchCommits = createAsyncThunk('repos/fetchCommits', async () => {
	const url = '/api/v1/repos/commits'
	const response = await api.get<{ sha: any; commit: any }[]>(url)
	const commits = response.map((res: { sha: any; commit: any }) => ({
		sha: res.sha,
		...res.commit,
	}))
	return commits
})

interface RepoState {
	status: RequestStatus,
	commits: ReposCommits,
}

const initialState: Partial<RepoState> = {
	status: RequestStatus.IDLE,
	commits: [],
}

const reposSlice = createSlice({
	name: 'repos',
	initialState,
	reducers: {
		setCommits: (state, action) => {
			state.commits = action.payload.commits ?? []
			return state
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchCommits.pending, (state) => {
			state = {
				...state,
				status: RequestStatus.LOADING,
			}
		})
		builder.addCase(fetchCommits.fulfilled, (state, { payload }) => {
			state = {
				...state,
				commits: payload ?? [],
				status: RequestStatus.SUCCEEDED,
			}
		})
		builder.addCase(fetchCommits.rejected, (state, action) => {
			state = {
				...state,
				status: RequestStatus.FAILED,
			}
			console.error(state, action);
		})
	},
})

export const { actions, reducer: reposReducer } = reposSlice
export const { setCommits } = actions
