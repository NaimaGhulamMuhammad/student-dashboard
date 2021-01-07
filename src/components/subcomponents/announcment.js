import React from 'react'
import {Card, CardHeader, Divider, Typography,Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from "@material-ui/core"


function Announcement() {
    return (
        <TableContainer component={Card}>
            <Typography variant="h6" gutterBottom align="left" className=" pl-4" color="primary">Complains</Typography>
            <Divider />
            <Table >
                <TableHead >
                    <TableRow>
                        <TableCell>School Name</TableCell>
                        <TableCell>Descriptiom</TableCell>
                        <TableCell>Reply</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Announcement
