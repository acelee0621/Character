"use client";

import { createTheme, ListItemButton, ListItemIcon, Switch, useColorScheme } from "@mui/material";
import { IconSunMoon } from "@tabler/icons-react";


export function ThemeSwitcher() {
  
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  const theme = createTheme({
    colorSchemes: {
      dark: true,
    },
  });

  return (
    <ListItemButton sx={{justifyContent:"center"}} component="a" href="#home">
      <ListItemIcon>
        <IconSunMoon />
      </ListItemIcon>
      <Switch
        onChange={() => {
            setMode(mode === "light" ? "dark" : "light");
        }}
      />
    </ListItemButton>
  );
}
