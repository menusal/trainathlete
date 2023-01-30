import { Box, Grid, IconButton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export default function Chronometer() {
  const [time, setTime] = useState(0);
  const [timeFormatted, setTimeFormatted] = useState<Chronometer>({
    hours: "00",
    minutes: "00",
    seconds: "00",
    miliseconds: "00",
  });

  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<any>(null);

  interface Chronometer {
    hours: string;
    minutes: string;
    seconds: string;
    miliseconds: string;
  }

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime((time) => time + 1);
      }, 10);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    setTimeFormatted(convertMillisecondsToChronometer(time) as Chronometer);
  }, [time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <Grid container md>
      <Grid item xs={12}>
        <Box>
          <Typography variant="h1" color="textPrimary" component="span">
            {timeFormatted.hours}:
          </Typography>
          
          <Typography variant="h1" color="textPrimary" component="span">
            {timeFormatted.minutes}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h1" color="textPrimary" component="span">
            {timeFormatted.seconds}.{timeFormatted.miliseconds}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ justifyContent: "center" }}>
          {!isRunning ? (
            <IconButton aria-label="  " onClick={handleStart}>
              <PlayCircleIcon sx={{ fontSize: 128 }} />
            </IconButton>
          ) : (
            <IconButton aria-label="  " onClick={handlePause}>
              <PauseCircleIcon sx={{ fontSize: 128 }} />
            </IconButton>
          )}
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ justifyContent: "center" }}>
          <IconButton aria-label="  " onClick={handleReset}>
            <RestartAltIcon sx={{ fontSize: 64 }} />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
}

function convertMillisecondsToChronometer(time: number) {
  const ms = time % 100;
  const s = Math.floor(time / 100) % 60;
  const m = Math.floor(time / 100 / 60) % 60;
  const h = Math.floor(time / 100 / 60 / 60);
  const pad = (n: number) => (n < 10 ? `0${n}` : n);
  return {
    hours: pad(h),
    minutes: pad(m),
    seconds: pad(s),
    miliseconds: pad(ms),
  };
}
