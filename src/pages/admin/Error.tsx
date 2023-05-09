import { Container, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { useRouteError } from "react-router-dom";
import { tokens } from "../../theme";

const Error = () => {
  const err: any = useRouteError();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Container>
      <Stack height={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Typography
          variant="h2"
          gutterBottom
          fontWeight={"900"}
          color={colors.primary[100]}
        >
          {err.status} {err.statusText || err.error.message}
        </Typography>
        {err.error.stack && (
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              backgroundColor: colors.primary[600],
              color: colors.redAccent[600],
            }}
          >
            <pre>{err.error.stack}</pre>
          </Paper>
        )}
      </Stack>
    </Container>
  );
};

export default Error;
