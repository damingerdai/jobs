import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

import { IJob, Jobs } from '../model/job';
import { api } from '../service/api';
import { useAppDispatch, useAppSelector } from '../slices/hook';
import { fetchJobs } from '../slices/job';

const Home = () => {
	const dispatch = useAppDispatch();
	const [job, setJob] = useState({} as Partial<IJob>);
	const [open, setOpen] = useState(false);
	// const [jobs, setJobs] = useState([] as Jobs);
	const { list } = useAppSelector(state => state.job as { list: Jobs});

	useEffect(() => {
		dispatch(fetchJobs());
	}, []);


	const createJob = (e?: any) => {
		api.post('api/v1/job', job).then((res) => {
			setOpen(false);
			dispatch(fetchJobs());
		});
	};

	return (
		<Container component="main" maxWidth="lg">
			<Box paddingTop="20px">
				<Button
					variant="contained"
					onClick={() => {
						setOpen(true);
					}}
				>
					create job
				</Button>
				<Dialog open={open} onClose={() => setOpen(false)}>
					<DialogTitle>Create A job</DialogTitle>
					<DialogContent>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Name"
							type="text"
							defaultValue={job.name}
							onChange={(e) => {
								setJob({
									...job,
									name: e.target.value,
								});
							}}
							fullWidth
							variant="standard"
						/>
						<TextField
							autoFocus
							margin="dense"
							id="cron"
							label="Cron"
							type="text"
							defaultValue={job.cron}
							onChange={(e) => {
								setJob({
									...job,
									cron: e.target.value,
								});
							}}
							fullWidth
							variant="standard"
						/>
						<TextField
							autoFocus
							margin="dense"
							id="group"
							label="Group"
							type="text"
							defaultValue={job.group}
							onChange={(e) => {
								setJob({
									...job,
									group: e.target.value,
								});
							}}
							fullWidth
							variant="standard"
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => setOpen(false)}>Cancel</Button>
						<Button color="secondary" onClick={createJob}>
							Create
						</Button>
					</DialogActions>
				</Dialog>
			</Box>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="jobs tables">
					<TableHead>
						<TableRow>
							<TableCell>#</TableCell>
							<TableCell align="left">Name</TableCell>
							<TableCell align="left">Class Name</TableCell>
							<TableCell align="left">Cron</TableCell>
							<TableCell align="left">Group</TableCell>
							<TableCell align="left">State</TableCell>
							<TableCell align="left">TimeZone</TableCell>
							<TableCell align="left">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{list?.map((job, i) => (
							<TableRow
								key={job.name + job.group}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{i + 1}
								</TableCell>
								<TableCell align="left">{job.name}</TableCell>
								<TableCell align="left">{job.className}</TableCell>
								<TableCell align="left">{job.cron}</TableCell>
								<TableCell align="left">{job.group}</TableCell>
								<TableCell align="left">{job.state}</TableCell>
								<TableCell align="left">{job.timezone}</TableCell>
								<TableCell align="left">
									<Button variant="contained" color="warning">Pause</Button>
									<Button variant="contained" color="error">Delete</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}

export default Home;
