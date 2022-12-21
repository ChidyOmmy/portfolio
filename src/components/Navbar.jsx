import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import AdbIcon from "@mui/icons-material/Adb";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AdbIcon />
            <Typography variant='h6'>DEVELOPER CHIDY</Typography>
          </Box>
          <Typography component='a'>Menu </Typography>
          <Typography component='a'>Another Menu</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
