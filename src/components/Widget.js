import React from 'react'
import {Card, CardMedia,CardActions, Button} from "@material-ui/core"
import avatar from "../images/avatar.png"

function Widget(props) {
    const {text, link} = props
    return (
        <Card >
           <CardMedia src={avatar}  height="220px" component="img" alt={text}  />
           <CardActions className="justify-content-center mt-3">
               <Button variant="contained" className=" bgColor text-light m-2" style={{width:"100%"}} onClick={link}>{text}</Button>
           </CardActions>
        </Card>
    )
}

export default Widget
