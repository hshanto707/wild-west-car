import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import AllCars from './pages/AllCars/AllCars';
import Footer from './components/Footer/Footer';
import MyOrders from './pages/MyOrders/MyOrders';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
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
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
