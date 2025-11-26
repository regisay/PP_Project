'use client';

// ListItemButton을 추가로 import 해야 합니다.
import { Drawer, Grid, List, ListItemButton, ListItemText } from "@mui/material";

const menuItems = ["Home", "Tasks", "Stats", "Settings"];

export default function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left" >
      <List>
        <Grid mt={2}>
        {menuItems.map((item) => (
          // 🛑 에러가 났던 <ListItem button key={item}> 대신
          // ✅ <ListItemButton key={item}> 을 사용합니다.
          <ListItemButton key={item} >
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
        </Grid>
      </List>
    </Drawer>
  );
}