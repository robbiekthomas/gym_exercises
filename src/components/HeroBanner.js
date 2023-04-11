import React from "react";
import { Box, Typography, Button } from "@mui/material";


const HeroBanner = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "800px",
        "text-align": "center",
        backgroundImage: 'url("https://rare-gallery.com/mocahbig/65674-Woman-Brunette-GymGym-4k-Ultra-HD-Wallpaper.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
     
    >
      <Typography color="white" fontWeight="600" fontSize="36px">
        {" "}
        Every exercise for <br/> every muscle group
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "104px", xs: "64px" }, color:"white", fontStyle: 'italic', }}
        mb="23px"
        mt="30px"
      >
        Revelation
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4} sx={{ color:"white"}}>
        Over 1000 exercises to choose from
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "white", color: 'black', padding: "10px" }}
      >
        Explore Exercises
      </Button>

    </Box>
  );
};

export default HeroBanner;
