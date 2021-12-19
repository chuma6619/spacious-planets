import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {modal} from "bootstrap";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PLanet from './components/PLanet';
import Character from './components/Character';
import Planetload from './components/Planetload';

function App() {
  
  return (
    <Router>
    <div className="App">
     
      <div>
        <Switch> 
        <Route exact path="/">
          <Planetload />
          </Route>
          <Route  path="/Planets">
            <PLanet />
          </Route>
          <Route path="/Characters">
          <Character />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;