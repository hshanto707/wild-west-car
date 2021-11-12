import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import MakeAdmin from './../MakeAdmin/MakeAdmin';
import MyOder from './../MyOder/MyOder';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import AllOrders from "../../AllOrders/AllOrders";
import DisplayCar from "../../../components/DisplayCar/DisplayCar";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, user } = useAuth();

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <h1>slkdfjlsdfj</h1>
      <Divider />
      <Link to="/appointment" style={{ textDecoration: "none", color: "blue" }}>
        <Button color="inherit">Appointment</Button>
      </Link>
      { !admin && <Link to={`${url}`} style={{ textDecoration: "none", color: "blue" }}>
        <Button color="inherit">My Orders</Button>
      </Link>}
  
     { admin &&
        <Box>
          <Link
            to={`${url}/make-admin`}
            style={{ textDecoration: "none", color: "blue" }}
          >
            <Button color="inherit">Make Admin</Button>
          </Link>
          <br/>
          <Link
            to={`${url}/all-orders`}
            style={{ textDecoration: "none", color: "blue" }}
          >
            <Button color="inherit">All Orders</Button>
          </Link>
          <Link
            to={`${url}/all-cars`}
            style={{ textDecoration: "none", color: "blue" }}
          >
            <Button color="inherit">Add Car</Button>
          </Link>
        </Box>
      }
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
        <Route exact path={path}>
            <MyOder></MyOder>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <Route path={`${path}/all-orders`}>
            <AllOrders></AllOrders>
          </Route>
          <Route path={`${path}/all-cars`}>
            <DisplayCar></DisplayCar>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
