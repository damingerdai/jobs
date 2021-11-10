import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCommits = createAsyncThunk(
    'repos/fetchCommits',
    async () => {
        const url = "/api/v1/repos/commits";
        const response = await (await fetch(url)).json();
        const commits = response.map((res: { sha: any; commit: any; }) => {
            return {
                sha: res.sha,
                ...res.commit
            }
        });
        return commits;
    }
)

const initialState = {
    commits: [] as any[],
}

const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        setCommits: (state, action) => {
            state.commits = action.payload.commits ?? [];
            return state;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchCommits.fulfilled, (state, { payload }) => {
            state.commits = payload ?? [];
        })
        builder.addCase(fetchCommits.rejected, (state, action) => {
            console.error(state, action);
        })
    }
})

export const { actions, reducer: reposReducer  } = reposSlice;
export const { setCommits } = actions;
