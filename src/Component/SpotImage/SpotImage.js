import React from 'react';
import "./SpotImage.css"
import { Card } from 'react-bootstrap';

const SpotImage = (props) => {
    const { image } = props.spotImg
    const handleSelectedSpot = props.handleSelectedSpot
    return (
        <div>
            <Card onClick={() => handleSelectedSpot(props.spotImg)} className="d-flex flex-row" style={{ width: '14rem', height: '18rem', margin: "20px", borderRadius: "10px" }}>
                <Card.Img style={{ height: "18rem", borderRadius: "10px" }} variant="top" src={image} />
            </Card>
        </div>
    );
};

export default SpotImage;