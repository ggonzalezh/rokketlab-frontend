import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        RokketLab
      </Typography>
    </Toolbar>
  </AppBar>
);
