import { Slide, useScrollTrigger } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { SwitchThemeButton } from "@/features/themes/SwitchThemeButton/SwitchThemeButton";

import NavDrawer from "./NavDrawer";

const navItems = ["About", "Jobs", "Contact"];

export default function DrawerAppBar() {
  const hideTrigger = useScrollTrigger();
  const elevateTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <Slide appear={false} direction="down" in={!hideTrigger}>
      <AppBar
        component="nav"
        className={`sticky ${
          !elevateTrigger &&
          "mix-blend-difference [&.MuiPaper-root]:bg-transparent [&.MuiPaper-root]:shadow-none [&.MuiPaper-root]:bg-none"
        }`}
      >
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
    </Slide>
  );
}
