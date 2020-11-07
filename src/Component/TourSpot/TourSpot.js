import React, { useEffect, useState } from 'react';
import { data } from '../Data/Data'
import SpotDetails from './SpotDetails/SpotDetails';
import SpotImage from './SpotImage/SpotImage';

const TourSpot = () => {
    const [spot, setSpot] = useState([])
    useEffect(() => {
        setSpot(data)
    }, [])
    const [showSpot, setShowSpot] = useState([])
    const handleCard = (selectSpot) => {
        const clickedSpot = [...showSpot, selectSpot]
        setShowSpot(clickedSpot)
    }

    return (
        <div className="d-flex justify-content-between" >
            <div>
                {
                    showSpot.map(selectedSpot =>
                        <SpotDetails spd={selectedSpot} />)
                } || spot[1].name
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