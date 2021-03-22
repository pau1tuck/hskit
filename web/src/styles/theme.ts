import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundColor: "none",
                },
            },
        },
    },
    palette: {
        primary: {
            main: "#005089",
        },
        secondary: {
            main: "#008b8b",
        },
    },
});
