"use client";

import { AppBar, Toolbar, Typography, TextField, Box, IconButton, useMediaQuery } from "@mui/material/";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircle from '@mui/icons-material/AccountCircle'; // Import the AccountCircle icon
import React from "react";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 600px)"); // Check if screen size is mobile

  return (
    <>
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "#d1d1d1", color: "#000000" }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Left side of the navbar (for mobile, use a menu icon or empty space) */}
          {isMobile ? (
            // For mobile, you can add a Menu icon here or leave it as an empty space
            <IconButton edge="start" color="inherit" sx={{ ml: 2 }}>
              {/* Menu Icon (You can add your menu icon here) */}
            </IconButton>
          ) : (
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
          )}


          {/* Right side of the navbar (search box, notifications, and account) */}
          <Box display="flex" alignItems="center">
            {/* Search box (only visible for larger screens) */}
            {!isMobile && (
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                sx={{ marginRight: 2, width: 200 }}
              />
            )}

            {/* Notifications icon */}
            <IconButton color="inherit" sx={{ backgroundColor: "white", borderRadius: "8px", marginRight: 2 }}>
              <NotificationsActiveIcon />
            </IconButton>

            {/* Account icon and username */}
            <Box display="flex" alignItems="center" sx={{ backgroundColor: "white", paddingRight: "8px", borderRadius: "8px" }}>
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
              {!isMobile && (
                <Typography variant="body1" sx={{ marginLeft: "4px" }}>
                  Abdullah
                </Typography>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
