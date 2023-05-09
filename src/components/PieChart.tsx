import { ResponsivePie } from "@nivo/pie";
import { mockPieData } from "../faker/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useSelector } from "react-redux";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const system = useSelector((state: any) => state.System);
  return (
    <ResponsivePie
      data={mockPieData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeInnerRadiusOffset={15}
      activeOuterRadiusOffset={9}
      colors={{ scheme: "accent" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={15}
      arcLinkLabelsTextOffset={13}
      arcLinkLabelsTextColor={{ from: "color" }}
      arcLinkLabelsDiagonalLength={23}
      arcLinkLabelsStraightLength={36}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color", modifiers: [] }}
      arcLabelsSkipAngle={9}
      arcLabelsTextColor={{ theme: "background" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 100,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 0,
          spacing: 1,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      motionConfig="wobbly"
      transitionMode="centerRadius"
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 65,
          itemHeight: 18,
          itemTextColor: colors[system.themeColor as "blueAccent"][600],
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 20,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#fff",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
