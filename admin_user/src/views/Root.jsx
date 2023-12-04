import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Button, Tooltip } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import { SIDEBAR_DATA } from "../constant";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { adminState } from "../store/atoms/admin";
import AlertDialog from "../components/AlertDialog";

export default function Root() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const { token } = useRecoilValue(adminState);
  const setAdminRecoil = useSetRecoilState(adminState);
  const [isOpen, setisOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState("course");

  useEffect(() => {
    if (!token || !localStorage.getItem("token")) {
      navigate("/signin");
    }
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onClickLogout = () => {
    setisOpen(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    setAdminRecoil({
      email: "",
      password: "",
      isLoggedIn: false,
      token: "",
    });
    navigate("/signin");
    setisOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ background: "#fff", color: "black" }}
          open={open}
        >
          <Toolbar>
            <Box display="flex" width="100%" justifyContent="space-between">
              <div>
                {!open && (
                  <Button
                    variant="text"
                    color="success"
                    onClick={() => navigate("/course")}
                  >
                    <Typography variant="h5">Courseella</Typography>
                  </Button>
                )}
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ ml: 1, ...(open && { display: "none" }) }}
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <Tooltip
                title="Logout"
                sx={{ marginY: "auto", cursor: "pointer" }}
              >
                <LogoutIcon onClick={onClickLogout} />
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <Button
              variant="text"
              color="success"
              onClick={() => navigate("/course")}
            >
              <Typography variant="h5">Courseella</Typography>
            </Button>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <List>
            {SIDEBAR_DATA.map((text, index) => (
              <ListItem key={text.value} disablePadding>
                <ListItemButton
                  selected={selectedIndex === text.value}
                  onClick={() => setSelectedIndex(text.value)}
                >
                  <ListItemText
                    primary={text.label}
                    onClick={() => navigate(text.value)}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Outlet />
        </Main>
      </Box>
      <AlertDialog
        isOpen={isOpen}
        setisOpen={setisOpen}
        title={"Logout"}
        description={"Are you sure?"}
        handleYes={handleLogout}
      />
    </>
  );
}

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
