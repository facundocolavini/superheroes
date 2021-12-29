import "./App.css";
import React from 'react';
import Login from "./components/Login";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/index";
import Team from './components/Team';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from "wouter";
import { UserContextProvider} from "./context/UserContext";


function App() {
  return (
      <UserContextProvider>
        <HeaderNavbar/>
        <Switch>
          <Route component={Login} path="/login"/>
          <Route component={Home} path="/"/>
          <Route component={SearchResults} path="/search/:keyword"/>
          <Route component={Team} path="/myteam"/>
        </Switch>
      </UserContextProvider>
  );
}

export default App;
