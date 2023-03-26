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
        className={`sticky bg-cCommon-white/70 bg-none text-cCommon-black shadow-none backdrop-blur-lg dark:bg-cCommon-black/80 dark:text-cCommon-white`}
      >
        <Toolbar className="h-16 justify-between sm:px-12">
          {/* Navigation button and drawer */}
          <NavDrawer navItems={navItems} />

          {/* Logo */}
          <Logo />

          {/* Navigation items */}
          <div className="hidden gap-4 sm:flex">
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
