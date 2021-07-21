import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import classes from "./App.module.css";

import { AuthContext } from "./contexts/AuthContext";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";


function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className={classes.App}>
      <Switch>
        <Route path="/" exact>
          <AuthPage />
        </Route>
       (
        {isLoggedIn && <Route path="/dashboard" exact>
          <HomePage />
        </Route>}
        
    
        <Route path="*" exact>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
