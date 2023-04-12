import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const Footer = () => (
  <Box mt="80px" bgcolor="grey">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
    <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "84px", xs: "64px" }, color:"white", fontStyle: 'italic', }}
        mb="3px"
      >
        Revelation
      </Typography>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="11px" textAlign="center" pb="30px">Made by Robbie Thomas</Typography>
  </Box>
);

export default Footer;