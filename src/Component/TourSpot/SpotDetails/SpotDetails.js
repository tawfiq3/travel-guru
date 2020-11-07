import React from 'react';
import { Button } from 'react-bootstrap';

const SpotDetails = (props) => {
    const spDetails = props.spd
    const handleTourForm = props.handleTourForm
    return (
        <div style={{marginLeft: '60px',marginTop: '30px'}}>
            <h1>{spDetails.name}</h1>
            <p>{spDetails.shortDescription}</p>
            <Button variant="warning" onClick={handleTourForm}>Booking Now </Button>
        </div>
    );
};

export default SpotDetails;