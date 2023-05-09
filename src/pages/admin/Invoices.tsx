import { Button, Stack, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../faker/mockData";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useSelector } from "react-redux";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns: GridColDef<{
    id: number;
    name: string;
    email: string;
    cost: string;
    phone: string;
    date: string;
  }>[] = [
    {
      field: "id",
      headerName: "ID",
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    { field: "name", headerName: "Name", flex: 1 },
    {
      field: "email",
      headerName: "Email Address",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      type: "number",
      flex: 1,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];
  const system = useSelector((state: any) => state.System);
  return (
    <Stack sx={{ height: "75vh" }} spacing={2}>
      <Header title="Invoices" subtitle="List of all Invoices.">
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
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
        rows={mockDataInvoices}
        columns={columns}
        disableRowSelectionOnClick
        disableColumnSelector
        disableVirtualization
      />
    </Stack>
  );
};

export default Invoices;
