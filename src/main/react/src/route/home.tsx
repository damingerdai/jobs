import React, { useState } from "react";
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
  cron: string;
  group: string;
  state: string;
  timezone: string;
}

type Jobs = IJob[];

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [jobs, setJobs] = useState([] as Jobs);

  fetch("api/v1/jobs")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return [];
      }
    })
    .then((jobs) => console.log(jobs));

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
              fullWidth
              variant="standard"
            />
             <TextField
              autoFocus
              margin="dense"
              id="cron"
              label="Cron"
              type="text"
              fullWidth
              variant="standard"
            />
             <TextField
              autoFocus
              margin="dense"
              id="group"
              label="Group"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button color="secondary">Create</Button>
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
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Home;
