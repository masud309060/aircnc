import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Hotels from './components/Hotels/Hotels';

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
      </Switch>
    </Router>
  );
}

export default App;
