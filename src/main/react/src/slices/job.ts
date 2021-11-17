import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Jobs } from '../model/job';
import { api } from '../service/api';

export const fetchJobs = createAsyncThunk('job/fetchJobs', async (args, thunkApi) => {
	const state = thunkApi.getState();
	const jobs = await api.get('/api/v1/jobs');
	return jobs;
})

interface JobState {
    list: Jobs;
}

const initialState: Partial<JobState>= {
	list: []
}

const jobSlice = createSlice({
	name: 'job',
	initialState,
	reducers: {
		setJobs: (state, action) => {
			state.list = action.payload;
			return state
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchJobs.fulfilled, (state, action) => {
			state.list = action.payload as Jobs ?? []
		})
		builder.addCase(fetchJobs.rejected, (state, action) => {
			console.error(state, action)
		})
	}
});

export const { actions, reducer: jobReducer } = jobSlice
export const { setJobs } = actions