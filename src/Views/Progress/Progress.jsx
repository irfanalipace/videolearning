import React, { useState } from "react";
import { Grid, Box, Typography, Paper, Button, Dialog, DialogTitle, DialogContent, RadioGroup, FormControlLabel, DialogActions, Radio, Divider } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircularProgressWithLabel from "./CircularProgressWithLabel"; // Assuming this is your custom component
import { MdDiamond } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import ProgressClinder from "./ProgressClinder";
import CalendarCard from "./CalendarCard";
const data = [
  { level: "Level 1", inputHours: 150, knownWords: 400 },
  { level: "Level 2", inputHours: 50, knownWords: 300 },
  { level: "Level 3", inputHours: 150, knownWords: 1500 },
  { level: "Level 4", inputHours: 300, knownWords: 3000 },
  { level: "Level 5", inputHours: 600, knownWords: 5000 },
  { level: "Level 6", inputHours: 1000, knownWords: 7000 },
];

const StatisticsCard = ({ title, value, description, bg = "", style }) => (
  <Paper
    style={{
      padding: "10px",
      textAlign: "center",
      background: bg ? bg : "",
      color: bg ? "#fff" : "",
      borderRadius: "10px",
    }}
  >
    <Typography variant="h6" sx={{ fontSize: "14px" }}>
      {title}
    </Typography>
    <Typography variant="h5" style={style} sx={{ font: 'bold' }}>
      {value}
    </Typography>
    <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
      {description}
    </Typography>
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

const levels = [
  {
    level: "Level 1",
    description: "Starting from zero.",
    hours: 0,
    knownWords: 0,
  },
  {
    level: "Level 2",
    description: "Basic knowledge.",
    hours: 10,
    knownWords: 50,
  },
  {
    level: "Level 3",
    description: "Intermediate understanding.",
    hours: 20,
    knownWords: 150,
  },
  {
    level: "Level 4",
    description: "Advanced user.",
    hours: 50,
    knownWords: 500,
  },
];

const Progress = () => {
  const [open, setOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleClickOpen = (level) => {
    setSelectedLevel(level);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedLevel(null);
  };


  const handleCross = (level) => {
    // setSelectedLevel(level);
    !setOpen(true);
  };
  return (
    <Box sx={{ flexGrow: 1, padding: "20px", overflowY: "hidden" }}>
      <Grid container spacing={3} sx={{ marginBottom: "20px" }}>
        <Grid item xs={12} md={4}>
          <StatisticsCard
            style={{ color: "white" }}
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
            value="2 Days"
            description="Days You Practiced"
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper style={{ padding: "16px" }}>
            <Typography variant="h6" gutterBottom>
              Levels
            </Typography>
            {levels.map((level, index) => (
              <Paper
                key={index}
                onClick={() => handleClickOpen(level)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  margin: "10px 0",
                  border: "1px solid #00BFFF",
                  borderRadius: "10px",
                }}
              >
                <Box display="flex" alignItems="center">
                  <MdDiamond
                    style={{
                      color: index === 0 ? "#00BFFF" : "gray",
                      marginRight: "16px",
                      fontSize: "36px",
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ color: index === 0 ? "#00BFFF" : "gray", }}>{level.level}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {level.description}
                    </Typography>
                    <Box display="flex" alignItems="center" mt={1}>
                      <AccessTimeIcon
                        style={{ fontSize: "16px", marginRight: "4px" }}
                      />
                      <Typography variant="caption" color="textSecondary">
                        Hours of input: {level.hours}
                      </Typography>
                      <ChatBubbleOutlineIcon
                        style={{
                          fontSize: "16px",
                          marginLeft: "12px",
                          marginRight: "4px",
                        }}
                      />
                      <Typography variant="caption" color="textSecondary">
                        Known words: {level.knownWords}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <ArrowForwardIosIcon
                  style={{ color: "#000", fontSize: "16px" }}
                />
              </Paper>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper style={{ padding: "16px", height: "100%" }}>
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
                primaryColor="#0294D3"
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
        {/* Modal */}
        <Dialog open={open} onClose={handleClose} sx={{}}>
          <div className="flex justify-between items-center pr-6">
            <DialogTitle>Daily Goals</DialogTitle>
            <RxCross2 onClick={handleCross} />
          </div>
          <Divider variant="horizontal" />
          <DialogContent>
            <RadioGroup>
              <div className="border rounded-xl p-2 flex justify-between items-center w-full">
                <FormControlLabel value="15" control={<Radio />} label='Casual' />
                <p>15 min/day</p>
              </div>
              <div className="border rounded-xl p-2 flex justify-between items-center w-full">
                <FormControlLabel value="15" control={<Radio />} label='learner' />
                <p>15 min/day</p>
              </div>
              <div className="border rounded-xl p-2 flex justify-between items-center w-full">
                <FormControlLabel value="15" control={<Radio />} label='serious' />
                <p>15 min/day</p>
              </div>
              <div className="border rounded-xl p-2 flex justify-between items-center w-full">
                <FormControlLabel value="15" control={<Radio />} label='Chose Your own goal!' />
                <p>15 min/day</p>
              </div>
            </RadioGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">Save Changes</Button>
          </DialogActions>
        </Dialog>
      </Grid>

   
     
          <ProgressClinder />
        

    </Box>
  );
};

export default Progress;
