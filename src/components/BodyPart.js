import React from "react";
import { Stack, Typography } from "@mui/material";


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        border: bodyPart === item ? "2px solid darkgrey" : "",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        backgroundColor: "#fff",
        borderRadius: "20px",
        width: "270px",
        height: "190px",
        cursor: "pointer",
        gap: "47px",
        margin: '20px 0'
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1600, left: 100, behavior: "smooth" });
      }}
    >
    
      <Typography
        fontSize="34px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
