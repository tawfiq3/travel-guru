import { createContext, useEffect, useState } from 'react';
import './App.css';
import { data } from './Component/Data/Data';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TourForm from './Component/TourForm/TourForm';
import NoMatch from './Component/NoMatch/NoMatch';
import ChosenSpot from './Component/SpotDetails/ChosenSpot/ChosenSpot';
import Login from './Component/Login/Login';
import Booking from './Component/Booking/Booking';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const SpotLoaded = createContext();
export const AllowedUser = createContext()

function App() {
  const [spot, setSpot] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  useEffect(() => {
    setSpot(data)
  }, [])
  return (
    <AllowedUser.Provider value={[loggedInUser, setLoggedInUser]}>
      <SpotLoaded.Provider value={spot} >
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/chosenSpot/:spotId">
              <ChosenSpot />
            </Route>
            <Route path="/tourform">
              <TourForm />
            </Route>
            <PrivateRoute path="/booking">
              <Booking />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>

      </SpotLoaded.Provider >
    </AllowedUser.Provider>
  );
}

export default App;
