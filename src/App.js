import logo from './logo.svg';
import './App.css';
import Header from './Components/Home/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
function App() {
  return (
    <Router>
       <Switch>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
    </Router>
  );
}

export default App;
