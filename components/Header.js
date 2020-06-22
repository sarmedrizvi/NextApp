import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { deepOrange } from "@material-ui/core/colors";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#cf8e92",
    },
    secondary: {
      main: "#ffff",
    },
  },
});

// const innerTheme = createMuiTheme({
//   palette: {
//     secondary: {
//       main: green[500],
//     },
//   },
// });
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon color="secondary" 	/>
            </IconButton>
            <Typography variant="h6" color="secondary">
              Softlamp
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
