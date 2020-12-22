import axios from "axios";
import BoxscoreContainer from './boxscore/BoxscoreContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { NBA, MLB } from "./boxscore/useFeed";
import { NBA_ROUTE, MLB_ROUTE } from "./navigation/routes";
import { NavigationContainer } from "./navigation/NavigationContainer";

export const axiosInstance = axios.create({
  baseURL: "/api"
});

function App() {
  return (
    <Router>
      <NavigationContainer/>
      <Switch>
        <Route 
          exact 
          path={NBA_ROUTE} 
          component={() => <BoxscoreContainer league={NBA} />}
        />
        <Route 
          exact 
          path={MLB_ROUTE} 
          component={() => <BoxscoreContainer league={MLB} />}
        />
        <Redirect to={NBA_ROUTE} />
      </Switch>
      
    </Router>
  );
}

export default App;
