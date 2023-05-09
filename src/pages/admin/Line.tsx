import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box>
      <Header title="Line Chart" subtitle="Simple Line Chart." />
      <LineChart />
    </Box>
  );
};

export default Line;
