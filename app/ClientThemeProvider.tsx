'use client';

import { ReactNode } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// MUI 테마 생성
const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
  },
});

export default function ClientThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
