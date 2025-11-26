'use client';

import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Personal Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
