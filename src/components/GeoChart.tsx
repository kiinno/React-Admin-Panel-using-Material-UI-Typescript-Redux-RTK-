import React from "react";
import { geoFeatures } from "../faker/mockGeoFeatures";
import { ResponsiveGeoMap } from "@nivo/geo";
const GeoChart = () => {
  return (
    <ResponsiveGeoMap
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      fillColor="#eeeeee"
      borderWidth={0.5}
      borderColor="#333333"
      enableGraticule={true}
      graticuleLineColor="#666666"
    />
  );
};

export default GeoChart;
