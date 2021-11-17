import React, { useEffect } from 'react';

import Container from '@mui/material/Container';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { fetchCommits } from '../slices/repos';
import { useAppDispatch, useAppSelector } from '../slices/hook';

const Repos = () => {
	const dispatch = useAppDispatch();
	const { commits } = useAppSelector(state => state.repos);
	useEffect(() => {
		dispatch(fetchCommits());
	}, [dispatch])

	return (
		<Container component="div" maxWidth="lg">
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="repos commits tables">
					<TableHead>
						<TableRow>
							<TableCell># </TableCell>
							<TableCell align="left">Message</TableCell>
							<TableCell align="left">Author</TableCell>
							<TableCell align="left">Committer</TableCell>
							<TableCell align="left">Sha</TableCell>
							<TableCell align="left">Date</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{commits!.length > 0 && commits!.map((commit, i) => (
							<TableRow
								key={commit.sha}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{i + 1}
								</TableCell>
								<TableCell align="left">{commit.message}</TableCell>
								<TableCell align="left">{commit.author.name}</TableCell>
								<TableCell align="left">{commit.committer.name}</TableCell>
								<TableCell align="left">{commit.sha}</TableCell>
								<TableCell align="left">{commit.author.date}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	)
}
export default Repos;
