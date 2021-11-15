import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert } from "@mui/material";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Login.css'

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    // alert("hello");
    loginUser(loginData.email, loginData.password, history, location);
    e.preventDefault();
  };

  return (
    <div>
      <Header></Header>
      <div>
        <Grid container>
          <Grid sx={{ my: 'auto', marginLeft: '20px' }} item xs={12} md={4}>
          <h1 style={{color: "#222732"}}>Login</h1> 
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", ml: 3 }}
                id="standard-basic"
                label="Your email"
                name="email"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", ml: 3 }}
                id="standard-basic"
                label="Your password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <Button
                sx={{ width: "75%", m: 3 }}
                type="submit"
                variant="contained"
                className="button-dark"
              >
                Login
              </Button>
              <br />
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="text">New User? Please Register</Button>
              </NavLink>
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert severity="success">Login successfully!</Alert>
              )}
              {authError && <Alert severity="error">{authError}</Alert>}
            </form>
          </Grid>
          <Grid item  xs={12} md={7} sx={{marginLeft:'auto'}}>
            <img src="https://www.india.com/wp-content/uploads/2021/09/21C0550_001.jpg" alt="" className="clipping-img" />
          </Grid>
        </Grid>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
