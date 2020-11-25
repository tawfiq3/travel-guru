import React from 'react';
import { Card } from 'react-bootstrap';
import './SpotImage.css'

const SpotImage = (props) => {
  const img = props.placeImage
  const handlePlace = props.handlePlace
  console.log(handlePlace)
  return (
    <div >
      <Card onClick={()=>handlePlace(img)} className="d-flex flex-row" style={{ width: '14rem', height: '18rem', margin: "20px", borderRadius: "10px" }}>
        <Card.Img style={{ height: "18rem", borderRadius: "10px" }} variant="top" src={img.image} />
      </Card>
    </div>
  );
};

export default SpotImage;