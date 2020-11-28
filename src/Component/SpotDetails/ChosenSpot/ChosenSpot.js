import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { SpotLoaded } from '../../../App';
import "./ChosenSpot.css"
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from 'react-bootstrap';
 
    const ChosenSpot = () => {
        const { spotId } = useParams()
        const spotFullDetails = useContext(SpotLoaded)
        const [chosenSpotDetails, setChosenSpotDetails] = useState({})
        useEffect(() => {
            const matchedSpot = spotFullDetails.find(place => place.id == spotId);
            setChosenSpotDetails(matchedSpot)
        }, [spotId])

        const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'))
        const handleDateChange = (date) => {
            setSelectedDate(date);
        };

        const history = useHistory()
        const handleBooking = () => {
            const url = "/booking"
            history.push(url)
        }


        const { name, bigDescription } = chosenSpotDetails

        return (
            <div className="destination-place">
                <div className="place-description">
                    <h1 name={name}>{name}</h1>
                    <br />
                    <p>{bigDescription}</p>
                </div>

                <form className="form-items">
                    <label>Origin</label>
                    <br />
                    <input type="text"></input>
                    <br />
                    <label>Destination</label>
                    <br />
                    <input type="text"></input>
                    <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd"
                                margin="normal"
                                id="date-picker-inline"
                                label="From"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="To"
                                format="MM/dd"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>

                                <Button variant="warning" onClick={handleBooking}>Start Booking</Button>
                </form>
            </div>
        );
    };

    export default ChosenSpot;