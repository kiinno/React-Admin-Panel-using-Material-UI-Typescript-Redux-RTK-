import { Button, Stack, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { mockDataContacts } from "../../faker/mockData";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useSelector } from "react-redux";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns: GridColDef<{
    id: number;
    name: string;
    email: string;
    age: number;
    phone: string;
    address: string;
    city: string;
    zipCode: string;
    registrarId: number;
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
      field: "address",
      headerName: "Address",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "city",
      headerName: "City",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "registrarId",
      headerName: "Registrar ID",
      align: "left",
      headerAlign: "left",
    },
  ];
  const system = useSelector((state: any) => state.System);
  return (
    <Stack sx={{ height: "75vh" }} spacing={1}>
      <Header title="Contacts" subtitle="List of all contacts.">
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
        rows={mockDataContacts}
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
        disableRowSelectionOnClick
        disableColumnSelector
        disableVirtualization
      />
    </Stack>
  );
};

export default Contacts;
