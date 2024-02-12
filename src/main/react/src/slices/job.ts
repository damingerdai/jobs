import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IJob, Jobs } from '../types/job';
import { api } from '../lib/api';

export const fetchJobs = createAsyncThunk('job/fetchJobs', async () => {
	const jobs = await api.get('/api/v1/jobs');
	return jobs;
});

export const createJob = createAsyncThunk('job/createJob', async (args: IJob) => {
	await api.post('/api/v1/job', args);
	const jobs = await api.get('/api/v1/jobs');
	return jobs;
});

export const deleteJob = createAsyncThunk('job/deleteJob', async (args: IJob) => {
	await api.delete('/api/v1/job', args);
	const jobs = await api.get('/api/v1/jobs');
	return jobs;
});

export const pauseJob = createAsyncThunk('job/pauseJob', async (args: IJob) => {
	await api.put('/api/v1/job/pause', args);
	const jobs = await api.get('/api/v1/jobs');
	return jobs;
});

export const resumeJob = createAsyncThunk('job/resumeJob', async (args: IJob) => {
	await api.put('/api/v1/job/resume', args);
	const jobs = await api.get('/api/v1/jobs');
	return jobs;
});

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
		builder.addCase(createJob.fulfilled, (state, action) => {
			state.list = action.payload as Jobs ?? []
		})
		builder.addCase(createJob.rejected, (state, action) => {
			console.error(state, action)
		})
		builder.addCase(deleteJob.fulfilled, (state, action) => {
			state.list = action.payload as Jobs ?? []
		})
		builder.addCase(deleteJob.rejected, (state, action) => {
			console.error(state, action)
		})
		builder.addCase(pauseJob.fulfilled, (state, action) => {
			state.list = action.payload as Jobs ?? []
		})
		builder.addCase(pauseJob.rejected, (state, action) => {
			console.error(state, action)
		})
		builder.addCase(resumeJob.fulfilled, (state, action) => {
			state.list = action.payload as Jobs ?? []
		})
		builder.addCase(resumeJob.rejected, (state, action) => {
			console.error(state, action)
		})
	}
});

export const { actions, reducer: jobReducer } = jobSlice
export const { setJobs } = actions
