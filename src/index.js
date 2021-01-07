import React from "react";
import ReactDom from "react-dom"
import App from "./App"
import {BrowserRouter as Router} from "react-router-dom"
import {CssBaseline} from "@material-ui/core"
ReactDom.render(
<Router>
<CssBaseline />
<App />
</Router>, document.getElementById('root'))