import { Box, Grid, Stack, useTheme } from "@mui/material";
import Header from "../../components/Header";
import SpecialCard from "../../components/SpecialCard";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveRadar } from "@nivo/radar";
import { tokens } from "../../theme";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import GeoChart from "../../components/GeoChart";

export const Index = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const lineChartData = [
    {
      id: "japan",
      color: "hsl(163, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 226,
        },
        {
          x: "helicopter",
          y: 180,
        },
        {
          x: "boat",
          y: 290,
        },
        {
          x: "train",
          y: 216,
        },
        {
          x: "subway",
          y: 172,
        },
        {
          x: "bus",
          y: 118,
        },
        {
          x: "car",
          y: 236,
        },
        {
          x: "moto",
          y: 156,
        },
        {
          x: "bicycle",
          y: 58,
        },
        {
          x: "horse",
          y: 21,
        },
        {
          x: "skateboard",
          y: 47,
        },
        {
          x: "others",
          y: 248,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(91, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 12,
        },
        {
          x: "helicopter",
          y: 81,
        },
        {
          x: "boat",
          y: 199,
        },
        {
          x: "train",
          y: 118,
        },
        {
          x: "subway",
          y: 162,
        },
        {
          x: "bus",
          y: 297,
        },
        {
          x: "car",
          y: 142,
        },
        {
          x: "moto",
          y: 160,
        },
        {
          x: "bicycle",
          y: 136,
        },
        {
          x: "horse",
          y: 12,
        },
        {
          x: "skateboard",
          y: 132,
        },
        {
          x: "others",
          y: 187,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(220, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 149,
        },
        {
          x: "helicopter",
          y: 32,
        },
        {
          x: "boat",
          y: 19,
        },
        {
          x: "train",
          y: 70,
        },
        {
          x: "subway",
          y: 1,
        },
        {
          x: "bus",
          y: 272,
        },
        {
          x: "car",
          y: 61,
        },
        {
          x: "moto",
          y: 107,
        },
        {
          x: "bicycle",
          y: 33,
        },
        {
          x: "horse",
          y: 52,
        },
        {
          x: "skateboard",
          y: 67,
        },
        {
          x: "others",
          y: 105,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(224, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 297,
        },
        {
          x: "helicopter",
          y: 120,
        },
        {
          x: "boat",
          y: 256,
        },
        {
          x: "train",
          y: 193,
        },
        {
          x: "subway",
          y: 171,
        },
        {
          x: "bus",
          y: 109,
        },
        {
          x: "car",
          y: 245,
        },
        {
          x: "moto",
          y: 174,
        },
        {
          x: "bicycle",
          y: 242,
        },
        {
          x: "horse",
          y: 89,
        },
        {
          x: "skateboard",
          y: 29,
        },
        {
          x: "others",
          y: 139,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(66, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 19,
        },
        {
          x: "helicopter",
          y: 36,
        },
        {
          x: "boat",
          y: 225,
        },
        {
          x: "train",
          y: 204,
        },
        {
          x: "subway",
          y: 267,
        },
        {
          x: "bus",
          y: 93,
        },
        {
          x: "car",
          y: 291,
        },
        {
          x: "moto",
          y: 82,
        },
        {
          x: "bicycle",
          y: 141,
        },
        {
          x: "horse",
          y: 77,
        },
        {
          x: "skateboard",
          y: 66,
        },
        {
          x: "others",
          y: 283,
        },
      ],
    },
  ];
  const radarChartData = [
    {
      taste: "fruity",
      chardonay: 101,
      carmenere: 60,
      syrah: 78,
    },
    {
      taste: "bitter",
      chardonay: 108,
      carmenere: 55,
      syrah: 34,
    },
    {
      taste: "heavy",
      chardonay: 51,
      carmenere: 31,
      syrah: 98,
    },
    {
      taste: "strong",
      chardonay: 103,
      carmenere: 72,
      syrah: 78,
    },
    {
      taste: "sunny",
      chardonay: 69,
      carmenere: 83,
      syrah: 40,
    },
  ];
  return (
    <Stack>
      <Header title="Dashboard" subtitle="Duis dolore elit do eiusmod." />
      <Box>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <SpecialCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <SpecialCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <SpecialCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <SpecialCard />
          </Grid>
        </Grid>
      </Box>
      <Grid container justifyContent={"space-between"}>
        <Grid item xs={12} md={8}>
          <Box
            height={"350px"}
            bgcolor={colors.primary[400]}
            borderRadius={"4px"}
            m={1}
          >
            <ResponsiveLine
              data={lineChartData}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
              }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "transportation",
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "count",
                legendOffset: -40,
                legendPosition: "middle",
              }}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              useMesh={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            height={"350px"}
            bgcolor={colors.primary[400]}
            borderRadius={"4px"}
            m={1}
          >
            <ResponsiveRadar
              data={radarChartData}
              keys={["chardonay", "carmenere", "syrah"]}
              indexBy="taste"
              valueFormat=">-.2f"
              margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
              borderColor={{ from: "color" }}
              gridLabelOffset={36}
              dotSize={10}
              dotColor={{ theme: "background" }}
              dotBorderWidth={2}
              colors={{ scheme: "nivo" }}
              blendMode="multiply"
              motionConfig="wobbly"
              legends={[
                {
                  anchor: "top-left",
                  direction: "column",
                  translateX: -50,
                  translateY: -40,
                  itemWidth: 80,
                  itemHeight: 20,
                  itemTextColor: "#999",
                  symbolSize: 12,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#000",
                      },
                    },
                  ],
                },
              ]}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            height={"350px"}
            bgcolor={colors.primary[400]}
            borderRadius={"4px"}
            m={1}
          >
            <BarChart />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            height={"350px"}
            bgcolor={colors.primary[400]}
            borderRadius={"4px"}
            m={1}
          >
            <PieChart />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            height={"350px"}
            bgcolor={colors.primary[400]}
            borderRadius={"4px"}
            m={1}
          >
            <GeoChart />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};
