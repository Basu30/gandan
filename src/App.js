import React, { useState, useCallback } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "./main/home";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Login from "./auth/Auth";
import NewsItem from './pages/AddNews';
import CreateUser from "./auth/create-user";
import UpdateNews from "./pages/UpdateNews";
import Announce from "./pages/Announce";
import { AuthContext } from "./shared/context/auth-context";


import './App.css';


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  let routes;

  if (isLoggedIn){
    routes = (
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/news' exact>
          <NewsItem />
        </Route>
        <Route path='/update' exact>
          <UpdateNews />
        </Route>
        
        <Redirect to="/" /> 
      </Switch>
    );
  }else {
    routes = (
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/auth' exact>
          <Login />
        </Route>
        <Route path='/createUser' exact>
          <CreateUser />
        </Route>
        <Route path='/announce' exact>
          <Announce />
        </Route>

        <Redirect to="/auth" /> 
      </Switch>
    )
  }
  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
      <Router>
        <MainNavigation />    
          <Switch>    
            {routes} 
          </Switch>  
      </Router>  
    </AuthContext.Provider>
  );
}

export default App;
