import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box>
      <Header title="Pie Chart" subtitle="Pie is a simple chart for data." />
      <Box height={"75vh"}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
