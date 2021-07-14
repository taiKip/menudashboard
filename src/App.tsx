import { useContext } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'

import classes from './App.module.css';
import { AuthContext } from './contexts/AuthContext';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import Menu from './pages/Menu';
import Profile from './pages/Profile';


function App() {
 const {isLoggedIn} = useContext(AuthContext)
  return (
    <div className={classes.App}>
      <Switch>
        <Route path="/" exact>
<AuthPage/>
        </Route>
       <Route path="/dashboard" exact>
          <HomePage />
        </Route>
        {isLoggedIn && <Route path="/menu" exact>
          <Menu />
        </Route>}
        {isLoggedIn && <Route path="/profile" exact>
          <Profile />
        </Route>}
       
        <Route path="*" exact>
         <Redirect to="/"/>
        </Route>
</Switch>
    </div>
  );
}

export default App;
