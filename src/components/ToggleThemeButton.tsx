import { IconButton, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { systemActions } from "../store/system/slice";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const ToggleThemeButton = () => {
  const dispatch = useDispatch();
  const system = useSelector((state: any) => state.System);
  const theme = useTheme();
  return (
    <IconButton
      edge="start"
      size="small"
      onClick={(_) =>
        dispatch(
          systemActions.toggleTheme({
            mode: system.theme === "light" ? "dark" : "light",
          })
        )
      }
    >
      {theme.palette.mode === "dark" ? (
        <DarkModeOutlinedIcon />
      ) : (
        <LightModeOutlinedIcon />
      )}
    </IconButton>
  );
};

export default ToggleThemeButton;
