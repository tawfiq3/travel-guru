import React, { useEffect, useState } from 'react';
import { data } from '../Data/Data'
import SpotDetails from './SpotDetails/SpotDetails';
import SpotImage from './SpotImage/SpotImage';

const TourSpot = () => {
    const [spot, setSpot] = useState([])
    useEffect(() => {
        setSpot(data)
    }, [])
    console.log(spot)
    const [showSpot, setShowSpot] = useState([])
    const handleCard = (selectSpot) => {
        const clickedSpot = [selectSpot]
        setShowSpot(clickedSpot)
    }
    const handleTourForm = (chosenSpot) => {
        console.log("kaj kore naki deki", chosenSpot)
    }

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
                        <SpotImage placeImage={place} handleCard={handleCard}></SpotImage>
                    )
                }
            </div>
        </div>
    );
};

export default TourSpot;