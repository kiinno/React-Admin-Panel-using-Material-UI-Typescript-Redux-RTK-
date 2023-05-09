import { Outlet } from "react-router-dom";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import { Box } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimeLineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PublicIcon from "@mui/icons-material/Public";
import PieChartIcon from "@mui/icons-material/PieChart";

const Layout = () => {
  return (
    <div className="app">
      <Box>
        <Sidebar
          lists={[
            {
              title: "Main",
              children: [
                { icon: <HomeOutlinedIcon />, label: "Dashboard", to: "/" },
              ],
            },
            {
              title: "Data",
              children: [
                {
                  icon: <PeopleOutlinedIcon />,
                  label: "Manage Team",
                  to: "/team",
                },
                {
                  icon: <ContactsOutlinedIcon />,
                  label: "Contacts Informations",
                  to: "/contacts",
                },
                {
                  icon: <TimeLineOutlinedIcon />,
                  label: "Invoices Balances",
                  to: "/invoices",
                },
              ],
            },
            {
              title: "Pages",
              children: [
                {
                  icon: <PersonOutlinedIcon />,
                  label: "Profile Form",
                  to: "/form",
                },
                {
                  icon: <CalendarTodayOutlinedIcon />,
                  label: "Calendar",
                  to: "/calender",
                },
                { icon: <HelpOutlinedIcon />, label: "FAQ", to: "/faq" },
              ],
            },
            {
              title: "Charts",
              children: [
                {
                  icon: <BarChartOutlinedIcon />,
                  label: "Bar Chart",
                  to: "/bar",
                },
                {
                  icon: <PieChartIcon />,
                  label: "Pie Chart",
                  to: "/pie",
                },
                {
                  icon: <TimeLineOutlinedIcon />,
                  label: "Line Char",
                  to: "/line",
                },
                {
                  icon: <PublicIcon />,
                  label: "Geography Chart",
                  to: "/geography",
                },
              ],
            },
          ]}
        />
      </Box>
      <Box className="content">
        <Topbar />
        <Box p={2}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
