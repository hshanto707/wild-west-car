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
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import AllOrders from "../../AllOrders/AllOrders";
import MyOrders from "../../MyOrders/MyOrders";
import Pay from "../../Pay/Pay";
import DisplayCar from "../../../components/DisplayCar/DisplayCar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AddCar from "../../AddCar/AddCar";
import DashboardHome from "../../DashboardHome/DashboardHome";
import ClientReview from "../../ClientReview/ClientReview"
import ManageCars from "../../ManageCars/ManageCars";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, logout } = useAuth();

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <NavLink className="nav-item text-dark text-center" to="/">
        <h1 className="mt-2" style={{color: "#ff4605", fontWeight: "bold"}}>Home</h1>
      </NavLink>
      <Divider className="mt-1" />
      { !admin && <Link to={`${url}/my-orders`} style={{ textDecoration: "none", color: "#ff4605" }}>
        <Button color="inherit" style={{ fontSize: "18px" }}>My Orders</Button>
      </Link>}<br />
      { !admin && <Link to={`${url}/pay`} style={{ textDecoration: "none", color: "#ff4605" }}>
        <Button color="inherit" style={{ fontSize: "18px" }}>Payment</Button>
      </Link>}<br />
      { !admin && <Link to={`${url}/review`} style={{ textDecoration: "none", color: "#ff4605" }}>
        <Button color="inherit" style={{ fontSize: "18px" }}>Review</Button>
      </Link>}<br />
      { !admin && <Button color="inherit" onClick={logout} style={{ textDecoration: "none", color: "#ff4605", fontSize: "18px" }}>Log Out</Button>}
      
  
     { admin &&
        <Box>
          <Link
            to={`${url}/all-orders`}
            style={{ textDecoration: "none", color: "#ff4605" }}
          >
            <Button color="inherit" style={{ fontSize: "18px" }}>All Orders</Button>
          </Link>
          <br/>
          <Link
            to={`${url}/manage-cars`}
            style={{ textDecoration: "none", color: "#ff4605" }}
          >
            <Button color="inherit" style={{ fontSize: "18px" }}>Manage Cars</Button>
          </Link>
          <br/>
          <Link
            to={`${url}/add-car`}
            style={{ textDecoration: "none", color: "#ff4605" }}
          >
            <Button color="inherit" style={{ fontSize: "18px" }}>Add Car</Button>
          </Link>
          <br/>
          <Link
            to={`${url}/make-admin`}
            style={{ textDecoration: "none", color: "#ff4605" }}
          >
            <Button color="inherit" style={{ fontSize: "18px" }}>Create Admin</Button>
          </Link>
          <br/>
          <Button color="inherit" onClick={logout} style={{ textDecoration: "none", color: "#ff4605", fontSize: "18px" }}>Log Out</Button>
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
          <h2 className="mt-2">Dashboard</h2>
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
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/review`}>
            <ClientReview></ClientReview>
          </Route>
          <AdminRoute path={`${path}/make-admin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <Route path={`${path}/all-orders`}>
            <AllOrders></AllOrders>
          </Route>
          <Route path={`${path}/manage-cars`}>
            <ManageCars></ManageCars>
          </Route>
          <Route path={`${path}/my-orders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/all-cars`}>
            <DisplayCar></DisplayCar>
          </Route>
          <Route path={`${path}/add-car`}>
            <AddCar></AddCar>
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
