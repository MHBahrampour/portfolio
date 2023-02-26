import { SwitchThemeButton } from "@/themes/SwitchThemeButton/SwitchThemeButton";

import {
  AppBar,
  Button,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";

import NavDrawer from "./NavDrawer";

const navItems = ["About", "Jobs", "Contact"];

export default function DrawerAppBar() {
  const hideTrigger = useScrollTrigger({
    threshold: 500,
  });
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
          "mix-blend-difference [&.MuiPaper-root]:bg-transparent [&.MuiPaper-root]:shadow-none [&.MuiPaper-root]:bg-none !fixed"
        }`}
      >
        <Toolbar className="justify-between">
          {/* Navigation button and drawer */}
          <NavDrawer navItems={navItems} />

          {/* Logo */}
          <Typography variant="h6" component="div" className="mr-4">
            [ MHB ]
          </Typography>

          {/* Navigation items */}
          <div className="hidden sm:flex gap-4">
            {navItems.map((item) => (
              <Button key={item} className="text-white">
                {item}
              </Button>
            ))}
          </div>

          {/* Theme switcher */}
          <SwitchThemeButton />
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
