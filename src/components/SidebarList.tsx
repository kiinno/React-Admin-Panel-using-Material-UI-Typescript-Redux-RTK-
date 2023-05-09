import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../theme";
import { NavLink, To } from "react-router-dom";
import { systemActions } from "../store/system/slice";
import { useDispatch, useSelector } from "react-redux";

type ListItemChildren = {
  icon: React.ReactNode;
  label: string;
  to: To;
};
type ListItemType = {
  title: string;
  children?: ListItemChildren[];
};
const SidebarList: React.FC<ListItemType> = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const system = useSelector((state: any) => state.System);
  return (
    <Box>
      <Typography
        variant="subtitle2"
        sx={{
          color: colors.grey[300],
          ml: "15px",
        }}
        fontWeight={"500"}
      >
        {props.title.toUpperCase()}
      </Typography>
      <List
        sx={{
          "& .nav-link.active": {
            color: `${
              colors[system.themeColor as "blueAccent"][600]
            } !important`,
          },
        }}
      >
        {props.children?.map((listData, index) => {
          return (
            <NavLink
              to={listData.to}
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
              className="nav-link"
              onClick={(_) => dispatch(systemActions.sidebarCollapse(false))}
            >
              <ListItem disablePadding key={index}>
                <ListItemButton sx={{ py: 0 }}>
                  <ListItemIcon sx={{ color: `inherit` }}>
                    {listData.icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    <Typography variant="subtitle1">
                      {listData.label}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </Box>
  );
};

export default SidebarList;
