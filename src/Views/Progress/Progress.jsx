import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
      padding: "16px",
      textAlign: "center",
      background: bg ? bg : "",
      color: bg ? "#fff" : "",
      borderRadius: "10px",
    }}
  >
    <Typography variant="h6">{title}</Typography>
    <Typography variant="h4" style={{ color: "#1e88e5" }}>
      {value}
    </Typography>
    <Typography variant="subtitle1">{description}</Typography>
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
            value="28"
            description="Minutes Watched"
            bg="#063E5F"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatisticsCard
            title="Videos"
            value="3"
            description="Watched Videos"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatisticsCard
            title="Practiced Days"
            value="2"
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

        {/* Daily Goals Section */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: "16px", height: "100%" }}>
            <Typography variant="h6">Daily Goals</Typography>
            {/* Placeholder for future Daily Goals */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Progress;
