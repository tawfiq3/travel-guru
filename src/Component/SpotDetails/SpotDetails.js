import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SpotDetails = (props) => {
    const {name, shortDescription,id} = props.selectedSpot;

    const history = useHistory()
    const handleSpotDetails = (id) =>{
        const url = `/chosenSpot/${id}`;
        history.push(url)
    }

    return (
        <div>
            <h1>{name}</h1>
            <p>{shortDescription}</p>
           <Button onClick={() =>handleSpotDetails(id)} variant="warning">Booking</Button>
        </div>
    );
};

export default SpotDetails;