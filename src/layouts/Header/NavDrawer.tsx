import React, { useState } from "react";

import SmoothLink from "@/components/SmoothLink";
import { CgClose, CgMenuLeft } from "react-icons/cg";

import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
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
        className="sm:hidden text-inherit"
      >
        <CgMenuLeft />
      </IconButton>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        className="sm:hidden [&_.MuiDrawer-paper]:min-w-[240px] [&_.MuiDrawer-paper]:w-4/6 [&_.MuiDrawer-paper]:bg-none [&_.MuiDrawer-paper]:backdrop-blur-xl [&_.MuiDrawer-paper]:bg-cCommon-white/70 dark:[&_.MuiDrawer-paper]:bg-cCommon-black/70  [&_.MuiDrawer-paper]:py-4"
      >
        <div onClick={handleDrawerToggle}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-12">
            {/* Logo */}
            <SmoothLink scrollToTop action={handleDrawerToggle}>
              <Typography
                variant="h6"
                component="div"
                className="text-cCommon-white px-2 rounded-lg leading-snug gradient-bg-animation "
              >
                MHB
              </Typography>
            </SmoothLink>

            {/* Drawer close button */}
            <IconButton
              aria-label="close drawer"
              edge="end"
              className="text-inherit"
            >
              <CgClose />
            </IconButton>
          </div>

          <Divider className="mt-4" />

          {/* Navigation items */}
          <List>
            {navItems.map((item) => (
              <SmoothLink
                key={item.name}
                link={item.link}
                action={handleDrawerToggle}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={item.name} className="uppercase" />
                  </ListItemButton>
                </ListItem>
              </SmoothLink>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}
