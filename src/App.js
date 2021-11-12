import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import AllCars from "./pages/AllCars/AllCars";
import MyOrders from "./pages/MyOrders/MyOrders";
import Pay from "./pages/Pay/Pay";
import CarPage from "./pages/CarPage/CarPage";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Register from "./pages/Register/Register";
import AllOrders from "./pages/AllOrders/AllOrders";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import AddCar from "./pages/AddCar/AddCar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/all-cars">
              <AllCars></AllCars>
            </Route>
            <Route path="/my-orders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/all-orders">
              <AllOrders></AllOrders>
            </Route>
            <Route path="/pay">
              <Pay></Pay>
            </Route>
            <Route path="/add-car">
              <AddCar></AddCar>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <PrivateRoute path="/cars/:id">
              <CarPage></CarPage>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
