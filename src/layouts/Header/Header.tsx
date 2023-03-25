import Logo from "@/components/Logo";
import SmoothLink from "@/components/SmoothLink";
import { SwitchThemeButton } from "@/themes/SwitchThemeButton/SwitchThemeButton";

import {
  AppBar,
  Button,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";

import NavDrawer from "./NavDrawer";

// const navItems = ["about", "jobs", "get in touch"];
const navItems = [
  { name: "about", link: "about" },
  { name: "jobs", link: "jobs" },
  { name: "get in touch", link: "get-in-touch" },
];

export default function DrawerAppBar() {
  const hideTrigger = useScrollTrigger({
    threshold: 500,
  });

  return (
    <Slide appear={false} direction="down" in={!hideTrigger}>
      <AppBar
        component="nav"
        className={`sticky dark:bg-cCommon-black/80 bg-cCommon-white/70 text-cCommon-black dark:text-cCommon-white backdrop-blur-lg shadow-none [&.MuiPaper-root]:bg-none`}
      >
        <Toolbar className="justify-between h-16">
          {/* Navigation button and drawer */}
          <NavDrawer navItems={navItems} />

          {/* Logo */}
          <Logo />

          {/* Navigation items */}
          <div className="hidden sm:flex gap-4">
            {navItems.map((item) => (
              <SmoothLink key={item.name} link={item.link}>
                <Button className="[&.MuiButtonBase-root]:text-inherit">
                  {item.name}
                </Button>
              </SmoothLink>
            ))}
          </div>

          {/* Theme switcher */}
          <SwitchThemeButton />
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
