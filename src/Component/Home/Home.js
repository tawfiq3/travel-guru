import './Home.css'
import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SpotLoaded } from '../../App';
import SpotImage from '../SpotImage/SpotImage';
import SpotDetails from '../SpotDetails/SpotDetails';

const Home = () => {
    const spotLoaded = useContext(SpotLoaded)
    const [selectedSpot, setSelectedSpot] = useState([])
    const handleSelectedSpot = (selectedSpotInfo) => {
        setSelectedSpot(selectedSpotInfo)   
    }
    
        return (
            <div>
                <div style={{display: 'flex'}}>
                    <div className="description-color">
                        <SpotDetails selectedSpot={selectedSpot}/>
                    </div>
                    <div style={{display: 'flex'}}>
                        {
                            spotLoaded.map(spotImg => <SpotImage key={spotImg.id} handleSelectedSpot={handleSelectedSpot} spotImg={spotImg} />) 
                        }
                    </div>
                </div>
            </div>
        );
    };

    export default Home;