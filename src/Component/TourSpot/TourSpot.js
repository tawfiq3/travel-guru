import React, { useContext, useEffect, useState } from 'react';
import { SpotSelection } from '../../App';
import { data } from '../Data/Data'
import { SpotChosen } from '../Home/Home';
import SpotDetails from './SpotDetails/SpotDetails';
import SpotImage from './SpotImage/SpotImage';

const TourSpot = () => {
    const spot = useContext(SpotSelection)
    const showSpot = useContext(SpotChosen)
    const handlePlace = useContext(SpotChosen)
    const handleTourForm = useContext(SpotChosen)

    return (
        <div className="d-flex justify-content-between" >
            <div style = {{color:'white'}}>
                {
                    showSpot.map(selectedSpot =>
                        <SpotDetails spd={selectedSpot} handleTourForm={handleTourForm} />)
                }
            </div>
            <div className="d-flex" >
                {
                    spot.map(place =>
                        <SpotImage placeImage={place} handlePlace={handlePlace}></SpotImage>
                    )
                }
            </div>
        </div>
    );
};

export default TourSpot;