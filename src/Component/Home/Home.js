import Header from '../Header/Header';
import './Home.css'
import TourSpot from '../TourSpot/TourSpot';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NoMatch from '../NoMatch/NoMatch';
import TourForm from '../TourForm/TourForm';

const Home = () => {
    return (
        <div>
            <Header />
           <TourSpot></TourSpot>
        </div>
    );
};

export default Home;