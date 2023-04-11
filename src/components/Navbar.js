import React from "react";

import { Button, Typography, Toolbar, Box, AppBar } from "@mui/material";

// import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{bgcolor:'white', color:'black'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Revelation
        </Typography>

        <Button href="/" color="inherit">
          Home
        </Button>
        <Button href="#exercises" color="inherit">
          Exercises
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navbar;
