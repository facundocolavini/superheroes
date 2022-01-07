import "./App.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults/index";

import Detail from './pages/Detail';
import {Switch,Route} from "wouter";
import {UserContextProvider} from "./context/UserContext";
import {HerosContextProvider} from "./context/HerosContext";
import { TeamContextProvider } from "./context/TeamContext";

function App() {

  return (
    <UserContextProvider>
      <HerosContextProvider>
      <TeamContextProvider>
        <HeaderNavbar/>
        <Switch>
          <Route component={Login} path="/login"/>
          <Route component={SearchResults} path="/search/:keyword"/>
          <Route component={Home} path="/"/>
          <Route component={Detail} path="/detail/:id"/>
        </Switch>
      </TeamContextProvider>  
      </HerosContextProvider>
    </UserContextProvider>
  );
}

export default App;
