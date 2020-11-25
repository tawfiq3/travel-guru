import { createContext, useEffect, useState } from 'react';
import './App.css';
import { data } from './Component/Data/Data';
import Home from './Component/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TourForm from './Component/TourForm/TourForm';
import NoMatch from './Component/NoMatch/NoMatch';

export const SpotSelection = createContext()

function App() {
  const [spot, setSpot] = useState([])
  useEffect(() => {
    setSpot(data)
  }, [])
  return (
    <SpotSelection.Provider value={spot} >
            <Router>
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/tourform/:id">
                  <TourForm />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </Router>
       
    </SpotSelection.Provider >
  );
}

export default App;
