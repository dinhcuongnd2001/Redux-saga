import * as React from "react";
import { Paper, makeStyles, Typography, Box, Button } from "@material-ui/core";
import authReducer, { authActions } from "../authSlice";
import { useAppDispatch } from "../../../app/hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  box: {
    padding: theme.spacing(2),
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const handleLoginClick = () => {
    dispatch(
      authActions.login({ username: "dncuong", password: "12042001dnc" })
    );
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.box}>
        <Typography>Student Manager</Typography>
        <Box mt={4}>
          <Button fullWidth component="h1" onClick={handleLoginClick}>
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
