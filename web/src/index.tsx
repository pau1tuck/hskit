import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
// import "./styles/global.css";
import {
    makeStyles,
    createStyles,
    Theme,
    ThemeProvider,
} from "@material-ui/core/styles";
import { theme } from "./styles/theme";
import { App } from "./components/_app";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <HashRouter>
            <App />
        </HashRouter>
    </ThemeProvider>,
    document.getElementById("root")
);
