import React from 'react'
import {Card, Divider, Typography} from "@material-ui/core"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function Assignment(props) {
  
    return (
     
        <TableContainer component={Card}>
            <Typography variant="h6" gutterBottom align="left" className=" pl-4" color="primary">Complains</Typography>
            <Divider />
            <Table >
                <TableHead >
                    <TableRow >
                        <TableCell>Subject Name</TableCell>
                        <TableCell>Details</TableCell>
                        <TableCell>Due date</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Submit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
       
    )
}

export default Assignment
