import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { mockDataTeam } from "../../faker/mockData";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useSelector } from "react-redux";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const system = useSelector((state: any) => state.System);
  const columns: GridColDef<{
    id: number;
    name: string;
    email: string;
    age: number;
    phone: string;
    access: string;
  }>[] = [
    {
      field: "id",
      headerName: "ID",
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    { field: "name", headerName: "Name", align: "left", headerAlign: "left" },
    {
      field: "email",
      headerName: "Email Address",
      flex: 1,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "access",
      headerName: "Access",
      renderCell: ({ row: { access } }) => {
        return (
          <Box width={"100%"} p={1} textAlign={"center"} borderRadius="10px">
            {access === "user" && (
              <Typography
                variant="subtitle2"
                color="#fff"
                sx={{
                  backgroundColor: colors.greenAccent[500],
                }}
              >
                {access.toUpperCase()}
              </Typography>
            )}
            {access === "admin" && (
              <Typography
                variant="subtitle2"
                color="#fff"
                sx={{
                  backgroundColor: colors.redAccent[500],
                }}
              >
                {access.toUpperCase()}
              </Typography>
            )}
            {access === "manager" && (
              <Typography
                variant="subtitle2"
                color="#fff"
                sx={{
                  backgroundColor:
                    colors[system.themeColor as "blueAccent"][500],
                }}
              >
                {access.toUpperCase()}
              </Typography>
            )}
          </Box>
        );
      },
    },
  ];
  return (
    <Stack sx={{ height: "75vh" }} spacing={1}>
      <Header title="Team" subtitle="List of Team.">
        <Button
          startIcon={<DownloadOutlinedIcon />}
          variant="contained"
          sx={{
            backgroundColor: colors[system.themeColor as "blueAccent"][500],
            "&:hover": {
              backgroundColor: colors[system.themeColor as "blueAccent"][600],
            },
          }}
        >
          Download as PDF
        </Button>
      </Header>
      <DataGrid
        rows={mockDataTeam}
        columns={columns}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors[system.themeColor as "blueAccent"][700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors[system.themeColor as "blueAccent"][700],
          },
          "& .MuiCheckbox-root": {
            color: `${
              colors[system.themeColor as "blueAccent"][200]
            } !important`,
          },
        }}
      />
    </Stack>
  );
};

export default Team;
