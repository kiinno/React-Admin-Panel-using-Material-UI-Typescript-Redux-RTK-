import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

type SystemInitialState = {
  theme: PaletteMode;
  sidebarStatus: boolean;
  themeColor: "blueAccent" | "greenAccent" | "redAccent";
};

const storedTheme = localStorage.getItem("theme");
const theme: PaletteMode =
  storedTheme === "light" || storedTheme === "dark" ? storedTheme : "light";

const initialState: SystemInitialState = {
  theme: theme,
  sidebarStatus: false,
  themeColor: "blueAccent",
};

export const system: any = createSlice({
  initialState,
  name: "system",
  reducers: {
    toggleTheme(state, { payload }) {
      state.theme = payload.mode;
      localStorage.setItem("theme", payload.mode);
    },
    sidebarCollapse(state, { payload }) {
      state.sidebarStatus = payload.state;
    },
    changeThemeColor(state, { payload }) {
      state.themeColor = payload.state;
    },
  },
});

export const systemActions = system.actions;
export default system.reducer;
