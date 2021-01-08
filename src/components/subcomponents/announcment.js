import React from 'react'
import {Card, CardHeader, Divider, Typography,Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from "@material-ui/core"


function Announcement() {
    return (
        <TableContainer component={Card}>
            <Typography variant="h6" gutterBottom align="left" className=" pl-4" color="primary">Announcement</Typography>
            <Divider />
            <Table >
                <TableHead >
                    <TableRow>
                        <TableCell>Subject</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Date</TableCell>
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
