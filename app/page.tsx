"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, CircularProgress, Typography } from '@mui/material';

export default function Home() {
  const redirecting = true; 
  const router = useRouter();

  useEffect(() => {
    if (redirecting) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [redirecting, router]); 

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        backgroundColor: '#f0f4f8' 
      }}
    >
      <CircularProgress size={60} sx={{ marginBottom: 2 }} />
      <Typography variant="h6" color="textSecondary">
        Redirecting...
      </Typography>
    </Box>
  );
}