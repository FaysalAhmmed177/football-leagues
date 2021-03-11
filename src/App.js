import './App.css';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LeagueDetail from './components/LeagueDetail/LeagueDetail';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/leagueDetail/:leagueId">
          <LeagueDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
