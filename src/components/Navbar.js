import React from "react";

import { Button, Typography, Toolbar, Box, AppBar } from "@mui/material";

// import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, fontStyle: "italic" }}
        >
          <Button href="/" sx={{ fontSize: "34px", textDecoration: 'none', color: 'black' }}>Revelation</Button>
        </Typography>

        <Button href="/" color="inherit" sx={{ fontSize: "24px" }}>
          Home
        </Button>
        <Button href="#exercises" color="inherit" sx={{ fontSize: "24px" }}>
          Exercises
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navbar;
