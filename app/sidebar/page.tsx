"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, List, ListItem, ListItemText, Typography, Divider, ListItemIcon, useMediaQuery, Drawer, IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width:600px)');  // Check if screen is small

  // Toggle sidebar open/close
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* For small screens, use a drawer */}
      {isMobile ? (
        <>
          <IconButton onClick={handleDrawerToggle} 
          sx={{
            position: 'absolute',    // Make it absolute to position it freely
            top: '3%',              // Position the icon at 50% of the height
            left: '20px',            // Keep the icon on the left side
            transform: 'translateY(-50%)', // Center it vertically by adjusting its own height
            paddingBottom: "5px",    // Optional, fine-tune padding
          }}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={open}
            onClose={handleDrawerToggle}
            sx={{
              width: 200,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 200,
                boxSizing: 'border-box',
              },
            }}
          >
            <Box sx={{ width: 200, color: 'black', backgroundColor: '#d1d1d1', height: '100%' }}>
              <List>
                <ListItem component="button" sx={{ '&:hover': { backgroundColor: 'red' } }} onClick={() => router.push("/dashboard")}>
                  <ListItemIcon >
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }} onClick={() => router.push("/SaleOrder")}>
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sale Order" />
                </ListItem>
                <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }}>
                  <ListItemIcon>
                    <ReceiptIcon />
                  </ListItemIcon>
                  <ListItemText primary="Purchase Order" />
                </ListItem>
                <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }}>
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Customers" />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }}>
                  <ListItemIcon>
                    <InventoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Products" />
                </ListItem>
                <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }}>
                  <ListItemIcon>
                    <AssessmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Billings" />
                </ListItem>
                <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }}>
                  <ListItemIcon>
                    <AssessmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Reports" />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }}>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Setting" />
                </ListItem>
                <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }}>
                  <ListItemIcon>
                    <SecurityIcon />
                  </ListItemIcon>
                  <ListItemText primary="Security" />
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        // For larger screens, show the sidebar as is
        <Box
          sx={{
            width: 200,
            color: 'black',
            backgroundColor: '#d1d1d1',
            height: '100vh',
            borderTop: '1px solid black',
            boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography variant="h6" sx={{ padding: 2 }}>
            General
          </Typography>
          <List>
            <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Sale Order" />
            </ListItem>
            <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }}>
              <ListItemIcon>
                <ReceiptIcon />
              </ListItemIcon>
              <ListItemText primary="Purchase Order" />
            </ListItem>
            <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItem>
          </List>
          <Divider />
          <Typography variant="h6" sx={{ padding: 2 }}>
            Tools
          </Typography>
          <List>
            <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }}>
              <ListItemIcon>
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }}>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Billings" />
            </ListItem>
            <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }}>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
          </List>
          <Divider />
          <Typography variant="h6" sx={{ padding: 2 }}>
            Support
          </Typography>
          <List>
            <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }} onClick={() => router.push("/Setting")}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItem>
            <ListItem component="button" sx={{ '&:hover': { backgroundColor: '#b0b0b0' } }}>
              <ListItemIcon>
                <SecurityIcon />
              </ListItemIcon>
              <ListItemText primary="Security" />
            </ListItem>
          </List>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
