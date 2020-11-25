import Header from '../Header/Header';
import './Home.css'
import TourSpot from '../TourSpot/TourSpot';
import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SpotLoaded } from '../../App';
const Home = () => {
    const spotLoaded = useContext(SpotLoaded)
    console.log(spotLoaded)
    
        return (
            <div>
                <Header />
                
                
            </div>
        );
    };

    export default Home;