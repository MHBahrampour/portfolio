import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { SwitchThemeButton } from "@/features/themes/SwitchThemeButton/SwitchThemeButton";

import NavDrawer from "./NavDrawer";

const navItems = ["About", "Jobs", "Contact"];

export default function DrawerAppBar() {
  return (
    <AppBar component="nav">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Navigation button and drawer */}
        <NavDrawer navItems={navItems} />

        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          className="hidden sm:block mr-4"
        >
          [ MHB ]
        </Typography>

        {/* Navigation items */}
        <Box className="hidden sm:block">
          {navItems.map((item) => (
            <Button key={item} className="text-white">
              {item}
            </Button>
          ))}
        </Box>

        {/* Theme switcher */}
        <SwitchThemeButton />
      </Toolbar>
    </AppBar>
  );
}
