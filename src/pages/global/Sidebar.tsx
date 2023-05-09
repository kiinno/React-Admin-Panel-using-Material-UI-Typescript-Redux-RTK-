import React from "react";

import {
  IconButton,
  Box,
  Drawer,
  Stack,
  Link,
  Typography,
} from "@mui/material";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { tokens } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { systemActions } from "../../store/system/slice";
import ToggleThemeButton from "../../components/ToggleThemeButton";
import SidebarList from "../../components/SidebarList";
import UserAvatar from "../../components/UserAvatar";
import { To } from "react-router-dom";

type ListItemChildren = {
  icon: React.ReactNode;
  label: string;
  to: To;
};
type ListItemType = {
  title: string;
  children?: ListItemChildren[];
};

const Sidebar: React.FC<{
  lists: ListItemType[];
}> = (props) => {
  const system = useSelector((state: any) => state.System);
  const dispatch = useDispatch();
  const colors = tokens(system.theme);
  const handleClose = (_: any) =>
    dispatch(systemActions.sidebarCollapse({ state: false }));
  return (
    <Drawer
      open={system.sidebarStatus}
      anchor="left"
      onClose={(_) => dispatch(systemActions.sidebarCollapse({ state: false }))}
    >
      <Stack
        direction={"column"}
        width={"300px"}
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={1.3}
        >
          <Typography
            variant="h4"
            color={colors[system.themeColor as "blueAccent"][600]}
            fontWeight={"bold"}
          >
            ADMINS
          </Typography>
          <Box>
            <ToggleThemeButton />
            <IconButton onClick={handleClose}>
              <CloseOutlinedIcon />
            </IconButton>
          </Box>
        </Stack>
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={1}
          mb={2}
        >
          <UserAvatar dim={{ width: "70px", height: "70px" }} />
          <Box textAlign={"center"}>
            <Typography
              variant="h4"
              color={colors[system.themeColor as "blueAccent"][100]}
            >
              Admin Hinidi
            </Typography>
            <Typography
              variant="body2"
              color={colors[system.themeColor as "blueAccent"][600]}
            >
              IT-Adminstrition & Accountant Manger
            </Typography>
          </Box>
        </Stack>
        <Stack spacing={1.5} flexGrow={"1"}>
          {props.lists.map((listData, listIndex) => {
            return (
              <SidebarList
                title={listData.title}
                children={listData.children}
                key={listIndex}
              />
            );
          })}
        </Stack>
        <Typography component={"div"} variant="h6" textAlign={"center"} p={2}>
          Copyrights &copy; To{" "}
          <Link
            color={colors[system.themeColor as "blueAccent"][300]}
            underline="hover"
            href="https://fb.com/100087629703852"
          >
            Orochimaru
          </Link>
        </Typography>
      </Stack>
    </Drawer>
  );
};
export default Sidebar;
