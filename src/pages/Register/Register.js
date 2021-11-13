import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink,useHistory } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const Register = () => {
   const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory()
    const [loginData, setLoginData] = useState({});
    const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
        if(loginData.password!==loginData.password2){
            alert(' password  not match! correct it');
            return
        }
      // alert("hello");
      registerUser( loginData.email, loginData.password, loginData.name, history );
      e.preventDefault();
    };

    return (
      <div>
      <Header></Header>
      <div>
        <Grid container>
          <Grid sx={{ my: 'auto', marginLeft: '20px' }} item xs={12} md={4}>
            <h1 style={{color: "#222732"}}>Register</h1>  
            {!isLoading && <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", ml: 3 }}
                id="standard-basic"
                label="Your name"
                name="name"
                type="text"
                required
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", ml: 3 }}
                id="standard-basic"
                label="Your email"
                name="email"
                type="email"
                required
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", ml: 3 }}
                id="standard-basic"
                label="Your password"
                type="password"
                name="password"
                required
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", ml: 3 }}
                id="standard-basic"
                label="Retype your password"
                type="password"
                name="password2"
                required
                onBlur={handleOnBlur}
                variant="standard"
              />
              <Button
                sx={{ width: "75%", m: 3 }}
                type="submit"
                variant="contained"
                className="button-dark"
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already Registered? Please Login</Button>
              </NavLink>
            </form>}
            {user?.email && <Alert severity="success">User created successfully!</Alert>}
            {authError &&  <Alert severity="error">{authError}</Alert>}
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

export default Register;