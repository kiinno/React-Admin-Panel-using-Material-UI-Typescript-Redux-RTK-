import React from "react";
import { themeSettings } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import routerMap from "./router";
import { CssBaseline, createTheme } from "@mui/material";
import { useSelector } from "react-redux";

const App: React.FC = () => {
  const system = useSelector((state: any) => state.System);
  const theme = createTheme(themeSettings(system.theme));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routerMap} />
    </ThemeProvider>
  );
};

export default App;
