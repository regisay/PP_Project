'use client';

import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: "240px", // Drawer 폭만큼 여백
          marginTop: "64px", // AppBar 높이만큼
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
