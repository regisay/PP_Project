'use client';

import { Card, CardContent, Typography } from "@mui/material";

interface CardItemProps {
  title: string;
  value: string | number;
}

export default function CardItem({ title, value }: CardItemProps) {
  return (
    <Card sx={{ minWidth: 200, margin: 1 }}>
      <CardContent>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="h5">{value}</Typography>
      </CardContent>
    </Card>
  );
}
