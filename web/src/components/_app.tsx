import React, { Suspense } from "react";
import { GlobalStyle } from "../styles/global";
import { Switch } from "react-router-dom";

export const App = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <GlobalStyle />
            <h1>Hello, Bastard.</h1>
            );
        </Suspense>
    );
};
