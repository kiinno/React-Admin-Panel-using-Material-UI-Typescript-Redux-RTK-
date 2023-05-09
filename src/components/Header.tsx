import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";
import { useSelector } from "react-redux";
type props = {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
};
const Header: React.FC<props> = ({ children, title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const system = useSelector((state: any) => state.System);
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"end"}
    >
      <Box mb={2}>
        <Typography
          variant="h3"
          fontWeight="bold"
          color={colors.primary[100]}
          textTransform={"uppercase"}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color={colors[system.themeColor as "blueAccent"][400]}
          ml={1}
          textTransform={"capitalize"}
        >
          {subtitle}
        </Typography>
      </Box>
      <Box>{children}</Box>
    </Stack>
  );
};

export default Header;
