import Link from "next/link";

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

// const navItems = ["about", "jobs", "get in touch"];
const navItems = [
  { name: "about", link: "#about" },
  { name: "jobs", link: "#jobs" },
  { name: "get in touch", link: "#get-in-touch" },
];

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
        className={`sticky dark:bg-cCommon-black/80 bg-cCommon-white/70 text-cCommon-black dark:text-cCommon-white backdrop-blur-lg shadow-cLight [&.MuiPaper-root]:bg-none ${
          !elevateTrigger &&
          "[&.MuiPaper-root]:bg-transparent [&.MuiPaper-root]:shadow-none !fixed"
        }`}
      >
        <Toolbar className="justify-between h-16">
          {/* Navigation button and drawer */}
          <NavDrawer navItems={navItems} />

          {/* Logo */}
          <Link href="/">
            <Typography
              variant="h6"
              component="div"
              className="text-cCommon-white px-2 rounded-lg leading-snug gradient-bg-animation"
            >
              MHB
            </Typography>
          </Link>

          {/* Navigation items */}
          <div className="hidden sm:flex gap-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.link} scroll={false}>
                <Button className="[&.MuiButtonBase-root]:text-inherit">
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Theme switcher */}
          <SwitchThemeButton />
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
