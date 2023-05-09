import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box>
      <Header title="Bar Chart" subtitle="Bar is a simple chart for data." />
      <Box height={"75vh"}>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
