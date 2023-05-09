import {
  Badge,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useDispatch, useSelector } from "react-redux";
import { systemActions } from "../../store/system/slice";
import ToggleThemeButton from "../../components/ToggleThemeButton";
import UserAvatar from "../../components/UserAvatar";
import { tokens } from "../../theme";

const Topbar = () => {
  const system = useSelector((state: any) => state.System);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log(system.themeColor);
  const dispatch = useDispatch();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems={"center"}
      px={2}
      py={1}
    >
      <Box display={"flex"} borderRadius="3px" alignItems="center">
        <TextField
          label="Search"
          size="small"
          variant="outlined"
          color="info"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small" edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box display={"flex"} gap={1} flexDirection={"row"} alignItems={"center"}>
        <IconButton
          edge="start"
          size="small"
          onClick={(_) =>
            dispatch(systemActions.sidebarCollapse({ state: true }))
          }
        >
          {system.sidebarStatus ? (
            <MenuOpenOutlinedIcon />
          ) : (
            <MenuOutlinedIcon />
          )}
        </IconButton>
        <IconButton edge="start" size="small">
          <SettingsOutlinedIcon />
        </IconButton>
        <ToggleThemeButton />
        <IconButton size="small" edge="start">
          <Badge
            max={99}
            badgeContent={100}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: colors[system.themeColor as "blueAccent"][600],
              },
            }}
          >
            <MessageOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton size="small" edge="start">
          <Badge
            max={99}
            badgeContent={100}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: colors[system.themeColor as "blueAccent"][600],
              },
            }}
          >
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton edge="start" size="small">
          <UserAvatar />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
