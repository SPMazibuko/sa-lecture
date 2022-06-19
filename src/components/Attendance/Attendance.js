import React from 'react';
import './attendance.css';
import Sidebar from '../sidebar/Sidebar';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Attendance() {
  return (
    <>
        <Sidebar />
        <div className='attendance__container'>
            <div className='attendance__top'>
                <h1>Attendance</h1>
                <div className='attendance__list'>
                    <h1>List</h1>
                    <TableContainer component={Paper} className="table">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                <TableCell>Student Number</TableCell>
                                        <TableCell className="tableCell">Full Name</TableCell>
                                        <TableCell className="tableCell">Date</TableCell>
                                        <TableCell className="tableCell">Details</TableCell>
                                        <TableCell className="tableCell">Percentage</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    <TableRow>
                                        <TableCell>2115546468</TableCell>
                                        <TableCell className="tableCell">Sifiso Mazibuko</TableCell>
                                        <TableCell className="tableCell">2015-june-15</TableCell>
                                        <TableCell className="tableCell">Present</TableCell>
                                        <TableCell className="tableCell">90%</TableCell>
                                    </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    </>
  )
}

export default Attendance