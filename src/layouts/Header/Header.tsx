import Logo from "@/components/Logo";
import SmoothLink from "@/components/SmoothLink";
import { SwitchThemeButton } from "@/themes/SwitchThemeButton/SwitchThemeButton";
import { motion, useScroll, useSpring } from "framer-motion";

import { AppBar, Button, Toolbar } from "@mui/material";

import { itemsDirectionMotion } from "@/utils/motions";

import NavDrawer from "./NavDrawer";

const navItems = [
  { name: "about", link: "about" },
  { name: "jobs", link: "jobs" },
  { name: "works", link: "works" },
  { name: "get in touch", link: "get-in-touch" },
];

export default function Header() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <AppBar
        component="nav"
        className={`sticky bg-common-white/70 bg-none text-lt-primary-main shadow-none backdrop-blur-lg dark:bg-common-black/80 dark:text-dt-primary-main`}
      >
        <Toolbar className="h-16 justify-between px-6 sm:px-12">
          {/* Navigation button and drawer */}
          <NavDrawer navItems={navItems} />

          {/* Logo */}
          <Logo />

          {/* Navigation items */}
          <div className="hidden gap-4 sm:flex">
            {navItems.map((item, index) => (
              <SmoothLink key={item.name} link={item.link}>
                <Button
                  className="[&.MuiButtonBase-root]:text-inherit"
                  component={motion.button}
                  {...itemsDirectionMotion(index + 2, "TB")}
                >
                  {item.name}
                </Button>
              </SmoothLink>
            ))}
          </div>

          {/* Theme switcher */}
          <SwitchThemeButton />
        </Toolbar>
      </AppBar>

      {/* Page scroll progress */}
      <motion.div
        className="gradient-bg-animation fixed top-16 left-0 right-0 z-10 h-[2px] origin-top-left"
        style={{ scaleX }}
      />
    </>
  );
}
