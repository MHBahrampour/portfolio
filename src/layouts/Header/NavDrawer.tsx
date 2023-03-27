import React, { useState } from "react";

import Link from "next/link";

import Logo from "@/components/Logo";
import SmoothLink from "@/components/SmoothLink";
import { CgClose, CgMenuLeft } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";

import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

interface NavDrawerProps {
  navItems: {
    name: string;
    link: string;
  }[];
}

export default function NavDrawer({ navItems }: NavDrawerProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Drawer open button */}
      <IconButton
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className="text-inherit sm:hidden"
      >
        <CgMenuLeft />
      </IconButton>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
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
          <List className="grid  gap-4">
            {navItems.map((item) => (
              <SmoothLink
                key={item.name}
                link={item.link}
                action={handleDrawerToggle}
              >
                <ListItem disablePadding>
                  <ListItemButton className="px-6">
                    <ListItemText primary={item.name} className="uppercase" />
                  </ListItemButton>
                </ListItem>
              </SmoothLink>
            ))}
          </List>
        </div>

        {/* Footer */}
        <div className="mx-6">
          <Link href="/bahrampour-resume.pdf">
            <Button
              disableElevation
              variant="outlined"
              size="large"
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
