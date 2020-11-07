import React from 'react';
import './SpotDetails.css'

const SpotDetails = (props) => {
    const spDetails = props.spd
    return (
        <div>
           <h1 className="spd-header">{spDetails.name}</h1>
        </div>
    );
};

export default SpotDetails;