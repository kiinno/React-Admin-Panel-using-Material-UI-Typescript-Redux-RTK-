import { Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import MailOutlinedIcon from "@mui/icons-material/MailSharp";
import { useSelector } from "react-redux";
const SpecialCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const system = useSelector((state: any) => state.System);
  return (
    <Stack
      flexDirection={"row"}
      borderRadius={"4px"}
      m={1}
      p={3}
      bgcolor={colors.primary[400]}
    >
      <Stack direction={"column"} spacing={0.3}>
        <MailOutlinedIcon
          sx={{ color: colors[system.themeColor as "blueAccent"][400] }}
          fontSize="large"
        />
        <Typography fontWeight={"bold"} variant="subtitle1">
          12,574
        </Typography>
        <Typography
          color={colors[system.themeColor as "blueAccent"][400]}
          variant="subtitle2"
        >
          Emails Sent
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SpecialCard;
