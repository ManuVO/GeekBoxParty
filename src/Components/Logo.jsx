import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box component="img" src="/static/GeekBoxParty.png" alt="logo" sx={{ backgroundColor: 'lightblue', borderRadius: '25%' }}/>
      </Link>
    </Box>
  );
};

export default Logo;
