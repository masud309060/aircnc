import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router className="app">
      <Switch>
        <Route path="/">
         <Home /> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
