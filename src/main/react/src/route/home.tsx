import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

interface IJob {
  className: string;
  name: string;
  cron: string;
  group: string;
  state: string;
  timezone: string;
}

type Jobs = IJob[];

const Home: React.FC = () => {
  const [job, setJob] = useState({} as Partial<IJob>);
  const [open, setOpen] = useState(false);
  const [jobs, setJobs] = useState([] as Jobs);

  useEffect(() => {
    fetchAllJobs();
  }, []);

  const fetchAllJobs = () => {
    fetch("api/v1/jobs")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((jobs) => {
        setJobs(jobs);
      });
  };

  const createJob = (e?: any) => {
    fetch("api/v1/job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    })
      .then((response) => response.json())
      .then((res) => {
        setOpen(false);
        fetchAllJobs();
      });
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box marginTop="20px">
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
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Class Name</TableCell>
              <TableCell align="right">Cron</TableCell>
              <TableCell align="right">Group</TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">TimeZone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job, i) => (
              <TableRow
                key={job.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">{i + 1}</TableCell>
                <TableCell align="right">{job.name}</TableCell>
                <TableCell align="right">{job.className}</TableCell>
                <TableCell align="right">{job.cron}</TableCell>
                <TableCell align="right">{job.group}</TableCell>
                <TableCell align="right">{job.state}</TableCell>
                <TableCell align="right">{job.timezone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Home;
