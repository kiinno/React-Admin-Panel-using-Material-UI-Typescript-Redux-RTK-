import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";

const Geography = () => {
  return (
    <Box>
      <Header
        title="Geography Chart"
        subtitle="Geography simple chart for data."
      />
      <Box height={"75vh"}>
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geography;
