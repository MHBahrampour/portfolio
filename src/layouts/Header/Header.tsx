import { m, useScroll, useSpring } from "framer-motion";

import { AppBar, Button, Toolbar } from "@mui/material";

import Logo from "@/components/Logo";
import SmoothLink from "@/components/SmoothLink";

import { useAppSelector } from "@/hooks/redux";

import { SwitchThemeButton } from "@/themes/SwitchThemeButton/SwitchThemeButton";

import { directionMotion } from "@/utils/motions";

import NavDrawer from "./NavDrawer";

const navItems = [
  { name: "about", link: "about" },
  { name: "experience", link: "experience" },
  { name: "projects", link: "projects" },
  { name: "get in touch", link: "get-in-touch" },
];

export default function Header() {
  const activeMenuItem = useAppSelector(
    (state) => state.menuItems.activeMenuItem,
  );

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <AppBar
        component="header"
        className={`sticky overflow-hidden bg-common-white/70 bg-none text-lt-primary-main shadow-none backdrop-blur-lg dark:bg-common-black/80 dark:text-dt-primary-main`}
      >
        <Toolbar
          component="nav"
          className="mx-auto h-16 w-full max-w-[1440px] justify-between px-6 sm:px-12"
        >
          {/* Navigation button and drawer */}
          <NavDrawer navItems={navItems} />

          {/* Logo */}
          <m.div {...directionMotion("LR", 1)}>
            <Logo />
          </m.div>

          {/* Navigation items */}
          <div className="hidden gap-2 sm:flex md:gap-4">
            {navItems.map((item, index) => {
              const isActive = activeMenuItem === item.link;
              return (
                <SmoothLink key={item.name} link={item.link}>
                  <Button
                    color={isActive ? "secondary" : "primary"}
                    component={m.button}
                    {...directionMotion("TB", index + 2)}
                  >
                    {item.name}
                  </Button>
                </SmoothLink>
              );
            })}
          </div>

          {/* Theme switcher */}
          <SwitchThemeButton />
        </Toolbar>
      </AppBar>

      {/* Page scroll progress */}
      <m.div
        className="gradient-bg-animation fixed left-0 right-0 top-16 z-10 h-[2px] origin-top-left"
        style={{ scaleX }}
      />
    </>
  );
}
