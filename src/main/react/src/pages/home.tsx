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

import { IJob } from '../types/job';
import { RequestStatus } from '../types/request-status';
import { useAppDispatch, useAppSelector } from '../slices/hook';
import {
	createJob,
	deleteJob,
	fetchJobs,
	pauseJob,
	resumeJob
} from '../slices/job';
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
	const dispatch = useAppDispatch();
	const [job, setJob] = useState({} as Partial<IJob>);
	const [open, setOpen] = useState(false);
	const [confirm, setConfirm] = useState(false);
	// const [jobs, setJobs] = useState([] as Jobs);
	const { list, status } = useAppSelector(state => state.job);

	useEffect(() => {
		dispatch(fetchJobs());
	}, []);

	const doCreateJob = (e?: any) => {
		dispatch(createJob(job as IJob));
		setOpen(false);
		setJob(null as any);
	};

	const doDeleteJob = () => {
		dispatch(deleteJob(job as IJob));
		setConfirm(false);
		setJob(null as any);
	};

	return (
		<Container component="main" maxWidth="lg">
			<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end', marginY: "8px" }}>
				<Button
					variant="contained"
					onClick={() => {
						setOpen(true);
						setJob(null as any);
					}}
				>
					create job
				</Button>
				<Dialog open={open} onClose={() => setOpen(false)}>
					<DialogTitle>Create a job</DialogTitle>
					<DialogContent>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Name"
							type="text"
							defaultValue={job?.name}
							onChange={e => {
								setJob({
									...job,
									name: e.target.value
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
							defaultValue={job?.cron}
							onChange={e => {
								setJob({
									...job,
									cron: e.target.value
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
							defaultValue={job?.group}
							onChange={e => {
								setJob({
									...job,
									group: e.target.value
								});
							}}
							fullWidth
							variant="standard"
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => setOpen(false)}>Cancel</Button>
						<Button color="secondary" onClick={doCreateJob}>
							Create
						</Button>
					</DialogActions>
				</Dialog>
				<Dialog
					open={confirm}
					sx={{ '& .MuiDialog-paper': { width: '300px', maxHeight: 435 } }}
					// fullWidth={true}
					maxWidth="md"
					onClose={() => setConfirm(false)}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">Delete job</DialogTitle>
					<DialogContent id="alert-dialog-description">Are your confirm?</DialogContent>
					<DialogActions>
						<Button onClick={() => setConfirm(false)}>Cancel</Button>
						<Button color="secondary" onClick={doDeleteJob}>
							Delete
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
						{list?.map((j: IJob, i: number) => (
							<TableRow
								key={j.name + j.group}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{i + 1}
								</TableCell>
								<TableCell align="left">{j.name}</TableCell>
								<TableCell align="left">{j.className}</TableCell>
								<TableCell align="left">{j.cron}</TableCell>
								<TableCell align="left">{j.group}</TableCell>
								<TableCell align="left">{j.state}</TableCell>
								<TableCell align="left">{j.timezone}</TableCell>
								<TableCell align="left">
									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										{j.state === 'NORMAL' && (
											<Button
												variant="contained"
												color="warning"
												onClick={() => {
													dispatch(pauseJob(j));
												}}
											>
												Pause
											</Button>
										)}
										{j.state === 'PAUSED' && (
											<Button
												variant="contained"
												color="secondary"
												onClick={() => {
													dispatch(resumeJob(j));
												}}
											>
												Resume
											</Button>
										)}
										<Button
											variant="contained"
											color="error"
											onClick={() => {
												setConfirm(true);
												setJob(job);
											}}
										>
											Delete
										</Button>
									</Box>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				{status === RequestStatus.LOADING && (<Box sx={{ width: '100%', display: 'flex', margin: 1, justifyContent: 'center', alignItems: 'center' }}>
					<CircularProgress />
				</Box>)}
			</TableContainer>
		</Container>
	);
};

export default Home;
