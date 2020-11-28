import React, { useEffect, useState } from 'react';
import { hotel } from '../Data/Data';
import './Booking.css'

const Booking = () => {
    const [room, setRoom] = useState([])
    useEffect(() => {
        setRoom(hotel)
    }, [])
    return (
        <div className="room-style">
            {
                room.map(rm =>
                    <div className="room-flex">
                        <img className="room" src={rm.photo} alt="" />
                        <div>
                            <h2>{rm.name}</h2>
                            <p>{rm.person}</p>
                            <p>{rm.rooms}</p>
                            <p>{rm.service}</p>
                            <p>{rm.spService}</p>
                            <p>{rm.rating}</p>
                            <h4>{rm.price}</h4>
                            <br/>
                            <br/>
                        </div>
                        
                    </div>


                )
            }
        </div>
    );
};

export default Booking;