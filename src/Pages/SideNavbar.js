import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Badge from "@mui/material/Badge";
import { useMediaQuery } from "@mui/material";
import Header from "./Header";
import MainSection from "./MainSection";
import { NavLink, useLocation } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { IoBagOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { MdOutlineInventory2 } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineCustomerService } from "react-icons/ai";
import { CiGift } from "react-icons/ci";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const iconSize = 24;

const iconMapping = {
  Metrix: (
    <img
      src="https://metrix-dashboard-ten.vercel.app/_next/image?url=%2Fimg%2Flogo-half.png&w=48&q=75"
      alt="Metrix"
      style={{ width: iconSize, height: iconSize }}
    />
  ),
  dashboard: <TbLayoutDashboardFilled size={iconSize} />,
  Orders: <IoBagOutline size={iconSize} />,
  Customers: <GoPeople size={iconSize} />,
  Inventory: <MdOutlineInventory2 size={iconSize} />,
  Conversations: <AiOutlineMessage size={iconSize} />,
  Settings: <IoSettingsOutline size={iconSize} />,
  "Contact Support": <AiOutlineCustomerService size={iconSize} color="black" />,
  "Free Gift Awaits You!": <CiGift size={iconSize} color="black" />,
  Logout: <FaSignOutAlt size={iconSize} />,
};

export default function SideNavbar() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(!isSmallScreen);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (text) => {
    setSelectedItem(text);
    if (isSmallScreen) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    setOpen(!isSmallScreen);
  }, [isSmallScreen]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Header />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div>
            <List>
              {[
                "Metrix",
                "dashboard",
                "Orders",
                "Customers",
                "Inventory",
                "Conversations",
                "Settings",
              ].map((text) => (
                <NavLink
                  to={`/${text.toLowerCase()}`}
                  key={text}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => handleListItemClick(text)}
                >
                  <ListItem disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        backgroundColor:
                          selectedItem === text && text !== "Metrix"
                            ? "blue"
                            : "inherit",
                        color:
                          selectedItem === text && text !== "Metrix"
                            ? "white"
                            : "inherit",
                        "&:hover": {
                          backgroundColor:
                            selectedItem === text && text !== "Metrix"
                              ? "blue"
                              : text !== "Metrix"
                              ? theme.palette.action.hover
                              : "inherit",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          color:
                            selectedItem === text && text !== "Metrix"
                              ? "white"
                              : "inherit", 
                        }}
                      >
                        <Badge
                          badgeContent={
                            (text === "Orders" && 3) ||
                            (text === "Conversations" && 16) ||
                            0
                          }
                          color={
                            selectedItem === text && text !== "Metrix"
                              ? "secondary"
                              : "primary"
                          }
                       
                        >
                          {iconMapping[text]}
                        </Badge>
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
              ))}
            </List>
          </div>
          <div>
            <Divider />
            <List>
              {["Contact Support", "Free Gift Awaits You!", "Logout"].map(
                (text) => (
                  <ListItem
                    key={text}
                    disablePadding
                    sx={{ display: "block" }}
                    onClick={() => handleListItemClick(text)}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        backgroundColor:
                          selectedItem === text
                            ? "blue"
                            : text === "Free Gift Awaits You!"
                            ? "#fff4e3"
                            : text === "Contact Support"
                            ? "#e3f2fd"
                            : "inherit",
                        color:
                          selectedItem === text
                            ? "white"
                            : text === "Free Gift Awaits You!" ||
                              text === "Contact Support"
                            ? "black"
                            : "inherit",
                        "&:hover": {
                          backgroundColor:
                            selectedItem === text
                              ? "blue"
                              : theme.palette.action.hover,
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          color: selectedItem === text ? "white" : "inherit",
                        }}
                      >
                        {iconMapping[text]}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        secondary={
                          text === "Free Gift Awaits You! " ? "" : null
                        } 
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                    {text === "Free Gift Awaits You! " && ( 
                      <p style={{ paddingLeft: 48 }}>Upgrade your Account</p>
                    )}
                  </ListItem>
                )
              )}
            </List>
          </div>
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <MainSection />
      </Box>
    </Box>
  );
}
