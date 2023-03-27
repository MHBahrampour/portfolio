import Logo from "@/components/Logo";
import SmoothLink from "@/components/SmoothLink";
import { SwitchThemeButton } from "@/themes/SwitchThemeButton/SwitchThemeButton";

import { AppBar, Button, Toolbar } from "@mui/material";

import NavDrawer from "./NavDrawer";

const navItems = [
  { name: "about", link: "about" },
  { name: "jobs", link: "jobs" },
  { name: "get in touch", link: "get-in-touch" },
];

export default function DrawerAppBar() {
  return (
    <AppBar
      component="nav"
      className={`sticky bg-common-white/70 bg-none text-common-black shadow-none backdrop-blur-lg dark:bg-common-black/80 dark:text-common-white`}
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
  );
}
