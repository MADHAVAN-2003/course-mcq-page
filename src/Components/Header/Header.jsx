import { Box, IconButton, InputBase, Paper } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import HeaderLogo from '../../Assets/Header-Logos.png';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Handle the search logic here
        console.log(searchTerm);
    };
  return (
    <Box>
      <Box
        sx={{
          height: "7vh",
          width: "98%",
          backgroundColor: "white",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        //   position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent : "space-between",
          padding : "1%"
        }}
      >
        
          <Paper
            elevation={0}
            component="form"
            onSubmit={handleSearch}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 350,
              backgroundColor: "#EFEFF7",
            }}
          >
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ "aria-label": "search google maps" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Paper>
          <img src={HeaderLogo} style={{marginRight:"20px"}} alt="" srcset=""/>
        </Box>
      </Box>
    
  );
}

export default Header;
