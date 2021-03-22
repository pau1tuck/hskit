import React, { Suspense } from "react";
import { GlobalStyle } from "../styles/global";
import { Switch } from "react-router-dom";
import { Box, Container, Paper } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
    makeStyles,
    useTheme,
    Theme,
    createStyles,
} from "@material-ui/core/styles";
import { drawer } from "./drawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        drawer: {
            [theme.breakpoints.up("md")]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        drawerContainer: {
            overflow: "auto",
        },
        appBar: {
            [theme.breakpoints.up("md")]: {
                zIndex: theme.zIndex.drawer + 1,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
            paddingTop: "10px",
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    })
);

export const App = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Suspense fallback={<div>Loading</div>}>
            <GlobalStyle />
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar variant="dense">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            HSKIT
                        </Typography>
                    </Toolbar>
                </AppBar>

                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden mdUp implementation="css">
                        <Drawer
                            variant="temporary"
                            anchor={
                                theme.direction === "rtl" ? "right" : "left"
                            }
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden smDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            <Toolbar variant="dense" />
                            <div className={classes.drawerContainer}>
                                {drawer}
                            </div>
                        </Drawer>
                    </Hidden>
                </nav>
                <Container maxWidth="md" className="classes.appContainer">
                    <main className={classes.content}>
                        <Toolbar variant="dense" />
                        <Box mb={2}>
                            <Paper>
                                <Box p={3}>
                                    <Typography variant="h3" gutterBottom>
                                        Chinese Proficiency Training
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box>
                        <Paper elevation={4}>
                            <Box p={5}>
                                <Typography paragraph>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Rhoncus dolor purus non enim praesent
                                    elementum facilisis leo vel. Risus at
                                    ultrices mi tempus imperdiet. Semper risus
                                    in hendrerit gravida rutrum quisque non
                                    tellus. Convallis convallis tellus id
                                    interdum velit laoreet id donec ultrices.
                                    Odio morbi quis commodo odio aenean sed
                                    adipiscing. Amet nisl suscipit adipiscing
                                    bibendum est ultricies integer quis. Cursus
                                    euismod quis viverra nibh cras. Metus
                                    vulputate eu scelerisque felis imperdiet
                                    proin fermentum leo. Mauris commodo quis
                                    imperdiet massa tincidunt. Cras tincidunt
                                    lobortis feugiat vivamus at augue. At augue
                                    eget arcu dictum varius duis at consectetur
                                    lorem. Velit sed ullamcorper morbi
                                    tincidunt. Lorem donec massa sapien faucibus
                                    et molestie ac.
                                </Typography>
                                <Typography paragraph>
                                    Consequat mauris nunc congue nisi vitae
                                    suscipit. Fringilla est ullamcorper eget
                                    nulla facilisi etiam dignissim diam.
                                    Pulvinar elementum integer enim neque
                                    volutpat ac tincidunt. Ornare suspendisse
                                    sed nisi lacus sed viverra tellus. Purus sit
                                    amet volutpat consequat mauris. Elementum eu
                                    facilisis sed odio morbi. Euismod lacinia at
                                    quis risus sed vulputate odio. Morbi
                                    tincidunt ornare massa eget egestas purus
                                    viverra accumsan in. In hendrerit gravida
                                    rutrum quisque non tellus orci ac.
                                    Pellentesque nec nam aliquam sem et tortor.
                                    Habitant morbi tristique senectus et.
                                    Adipiscing elit duis tristique sollicitudin
                                    nibh sit. Ornare aenean euismod elementum
                                    nisi quis eleifend. Commodo viverra maecenas
                                    accumsan lacus vel facilisis. Nulla posuere
                                    sollicitudin aliquam ultrices sagittis orci
                                    a.
                                </Typography>
                            </Box>
                        </Paper>
                    </main>
                </Container>
            </div>
            );
        </Suspense>
    );
};
