import React from "react";
import { Grid, Box, Typography, Paper, Button } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

const data = [
  { level: "Level 1", inputHours: 150, knownWords: 400 },
  { level: "Level 2", inputHours: 50, knownWords: 300 },
  { level: "Level 3", inputHours: 150, knownWords: 1500 },
  { level: "Level 4", inputHours: 300, knownWords: 3000 },
  { level: "Level 5", inputHours: 600, knownWords: 5000 },
  { level: "Level 6", inputHours: 1000, knownWords: 7000 },
];

const StatisticsCard = ({ title, value, description, bg = "" }) => (
  <Paper
    elevation={3}
    style={{
      padding: "3px",
      textAlign: "center",
      background: bg ? bg : "",
      color: bg ? "#fff" : "",
      borderRadius: "10px",
    }}
  >
    <Typography variant="h6" sx={{ fontSize: '14px' }}>{title}</Typography>
    <Typography variant="h5" style={{ color: "black", }}>
      {value}
    </Typography>
    <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>{description}</Typography>
  </Paper>
);

const LevelsChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="level" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="inputHours" fill="#1e88e5" />
      <Bar dataKey="knownWords" fill="#ffb74d" />
    </BarChart>
  </ResponsiveContainer>
);

const Progress = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "20px", overflowY: "hidden" }}>
      <Grid container spacing={3} sx={{ marginBottom: "20px" }}>
        <Grid item xs={12} md={4}>
          <StatisticsCard
            title="Video Watching Time"
            value="28 Minutes"
            description="Minutes Watched"
            bg="#063E5F"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatisticsCard
            title="Videos"
            value="3 Hours"
            description="Watched Videos"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatisticsCard
            title="Practiced Days"
            value="2 Video"
            description="Days You Practiced"
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6" gutterBottom>
              Levels
            </Typography>
            <LevelsChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: "16px", height: "100%" }}>
            <Typography variant="h6">Daily Goals</Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{ height: "150px", marginTop: "44px" }}
            >
              <CircularProgressWithLabel
                size={150}
                progress={85}
                strokeWidth={8}
                primaryColor="#3f51b5"
              />
            </Box>
            <Button
              sx={{
                background: "#0294D3",
                color: "white",
                marginTop: "45px",
                width: "100%",
              }}
            >
              Change Daily Goals Time
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Progress;
