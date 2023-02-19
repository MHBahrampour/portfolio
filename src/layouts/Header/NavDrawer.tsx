import { useState } from "react";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
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
        className="sm:hidden mr-4 text-inherit"
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        className="sm:hidden [&_.MuiDrawer-paper]:w-60"
      >
        <div onClick={handleDrawerToggle}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-12">
            {/* Logo */}
            <Typography variant="h6" className="my-4 text-center">
              [ MHB ]
            </Typography>

            {/* Drawer close button */}
            <IconButton
              aria-label="close drawer"
              edge="end"
              className="ml-4 text-inherit"
            >
              <CloseRoundedIcon />
            </IconButton>
          </div>

          <Divider />

          {/* Navigation items */}
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}
