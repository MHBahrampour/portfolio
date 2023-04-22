import React, { useState } from "react";

import Link from "next/link";

import { m } from "framer-motion";
import { CgClose, CgMenuLeft } from "react-icons/cg";

import { Button, Drawer, IconButton } from "@mui/material";

import Logo from "@/components/Logo";
import SmoothLink from "@/components/SmoothLink";

import { useAppSelector } from "@/hooks/redux";

import { directionMotion } from "@/utils/motions";

interface NavDrawerProps {
  navItems: {
    name: string;
    link: string;
  }[];
}
export default function NavDrawer({ navItems }: NavDrawerProps) {
  const activeMenuItem = useAppSelector(
    (state) => state.menuItems.activeMenuItem,
  );

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Drawer open button */}
      <IconButton
        edge="start"
        onClick={handleDrawerToggle}
        className="text-inherit sm:hidden"
        component={m.button}
        {...directionMotion("LR", 6)}
      >
        <CgMenuLeft />
      </IconButton>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        className="sm:hidden [&_.MuiDrawer-paper]:grid [&_.MuiDrawer-paper]:h-full [&_.MuiDrawer-paper]:w-4/6 [&_.MuiDrawer-paper]:min-w-[240px] [&_.MuiDrawer-paper]:grid-cols-1 [&_.MuiDrawer-paper]:grid-rows-[auto_1fr_auto] [&_.MuiDrawer-paper]:bg-white/70 [&_.MuiDrawer-paper]:bg-none [&_.MuiDrawer-paper]:py-6 [&_.MuiDrawer-paper]:backdrop-blur-lg dark:[&_.MuiDrawer-paper]:bg-common-black/80"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6">
          {/* Logo */}
          <div onClick={handleDrawerToggle}>
            <Logo />
          </div>

          {/* Drawer close button */}
          <IconButton
            aria-label="close drawer"
            edge="end"
            className="text-inherit"
            onClick={handleDrawerToggle}
          >
            <CgClose />
          </IconButton>
        </div>

        {/* Navigation items */}
        <div className="grid h-full items-center">
          <div className="grid gap-4">
            {navItems.map((item, index) => {
              const isActive = activeMenuItem === item.link;
              const activeStyle = "";
              return (
                <SmoothLink
                  key={item.name}
                  link={item.link}
                  action={handleDrawerToggle}
                >
                  <Button
                    className="w-full rounded-none px-6 py-3"
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
        </div>

        {/* Footer */}
        <div className="mx-6">
          <Link href="/MHBahrampour.pdf" target="_blank">
            <Button
              disableElevation
              variant="outlined"
              size="large"
              color="secondary"
              className="w-full normal-case"
            >
              Get My Resume
            </Button>
          </Link>
        </div>
      </Drawer>
    </>
  );
}
