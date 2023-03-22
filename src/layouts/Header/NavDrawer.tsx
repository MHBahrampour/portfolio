import { useState } from "react";

import Link from "next/link";

import { CgClose, CgMenuLeft } from "react-icons/cg";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
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
  navItems: string[];
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
        className="sm:hidden [&_.MuiDrawer-paper]:min-w-[240px] [&_.MuiDrawer-paper]:w-4/6 [&_.MuiDrawer-paper]:bg-none [&_.MuiDrawer-paper]:backdrop-blur-xl [&_.MuiDrawer-paper]:bg-cCommon-white/70 dark:[&_.MuiDrawer-paper]:bg-cCommon-black/70 [&_.MuiModal-backdrop]:bg-transparent [&_.MuiModal-backdrop]:backdrop-blur-sm [&_.MuiDrawer-paper]:py-4"
      >
        <div onClick={handleDrawerToggle}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-12">
            {/* Logo */}
            <Link href="/">
              <Typography
                variant="h6"
                component="div"
                className="text-cCommon-white px-2 rounded-lg leading-snug gradient-bg-animation "
              >
                MHB
              </Typography>
            </Link>

            {/* Drawer close button */}
            <IconButton
              aria-label="close drawer"
              edge="end"
              className="text-inherit"
            >
              <CgClose />
            </IconButton>
          </div>

          {/* <Divider /> */}

          {/* Navigation items */}
          <List>
            {navItems.map((item) => (
              <Link key={item} href={`#${item}`} scroll={false}>
                <ListItem key={item} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={item} className="uppercase" />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}
