import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Hotels from './components/Hotels/Hotels';
import Apartment from './components/Apartment/Apartment';
import Login from './components/Login/Login';
import OrderProcess from './components/OrderProcess/OrderProcess';
import PrivateRoute from './components/Login/PrivateRoute';

function App() {
  return (
    <Router className="app">
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>
        <Route path="/hotel">
          <Hotels /> 
        </Route>
        <Route path="/login">
          <Login /> 
        </Route>
        <Route path="/apartment/:hotel_id">
          <Apartment /> 
        </Route>
        <PrivateRoute path="/order-process">
          <OrderProcess /> 
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
