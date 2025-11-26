'use client';

import { Grid } from "@mui/material";
import DashboardLayout from "./dashboard/DashboardLayout";
import CardItem from "./dashboard/components/CardItem";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Grid container spacing={3}>
        
        {/*
          🛑 에러 발생 지점:
          <Grid item xs={12} sm={6} md={4}>
          
          ✅ 해결책: component="div"를 추가하여 타입을 명시합니다.
        */}
        
        <Grid size={{ xs: 6, md: 4 }}>
          <CardItem title="Tasks Completed" value={12} />
        </Grid>
        
        <Grid size={{ xs: 6, md: 4 }}>
          <CardItem title="Pending Tasks" value={3} />
        </Grid>
        
        <Grid size={{ xs: 6, md: 4 }}>
          <CardItem title="Notifications" value={5} />
        </Grid>

      </Grid>
    </DashboardLayout>
  );
}