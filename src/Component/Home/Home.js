import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Home.css'
import { data } from '../Data/Data'
import TourSpot from '../TourSpot/TourSpot';

const Home = () => {
    return (
        <div>
            <Header />
            <TourSpot/>
        </div>
    );
};

export default Home;