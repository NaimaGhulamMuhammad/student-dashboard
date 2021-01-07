import React from 'react'
import {Card, Divider, Typography} from "@material-ui/core"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function ViewComplain(props) {
    const {complain} = props
    return (
     
        <TableContainer component={Card}>
            <Typography variant="h6" gutterBottom align="left" className=" pl-4" color="primary">Complains</Typography>
            <Divider />
            <Table >
                <TableHead >
                    <TableRow >
                        <TableCell>School Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Reply</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* map will be used here */}
                    {/* {complain.map((data) => {})} */}
                    <TableRow>
                        <TableCell>School name goes here</TableCell>
                        <TableCell>{complain.msg}</TableCell>
                        <TableCell></TableCell>
                        <TableCell>{complain.date}</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
       
    )
}

export default ViewComplain
