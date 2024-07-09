import React from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import logo from "../assets/logo.png";
import { ArrowDropDown } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const navItems = ["Refer & Earn", "Resources", "About us"];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="static" color="transparent" elevation={2}>
      <Container>
        <Toolbar disableGutters>
          <img src={logo} alt="Acredian" style={{ marginRight: "20px", height: "40px" }} />
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={handleDrawerToggle}
                  onKeyDown={handleDrawerToggle}
                >
                  <List>
                    {navItems.map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                endIcon={<ArrowDropDown />}
                sx={{ my: 2, ml: 1, textTransform: "none" }}
              >
                Courses
              </Button>
              <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
                {navItems.map((item, index) => (
                  <Button
                    key={index}
                    sx={{ my: 2, color: "blue", display: "block", textTransform: "none" }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: "flex" }}>
                <Button variant="contained" sx={{ my: 2, color:"black", backgroundColor: '#eaedf1', display: "block", textTransform: "none" }}>
                  Login
                </Button>
                <Button variant="contained" sx={{ my: 2, ml: 1, textTransform: "none" }}>
                  Try for free
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;