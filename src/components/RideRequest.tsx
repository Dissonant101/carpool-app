
import { ChangeEvent, useState } from "react";
import RideSearch from "./RideSearch";

const RideRequest = () => {

    const [currentLocation, setCurrentLocation] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentLocation(e.target.value);
    };



    return (
        <section id='ride-request-page'>
            <div className='left-shift'>
                Request Rides
            </div>
            <div className='info-form'>
                <div className='info-container'>
                    <h2>From: </h2>
                    <input type='text' className='input-field' placeholder='Current Location' id='current_location' onChange={handleChange} value={currentLocation}/>
                </div>
                <div className='info-container'>
                    <h2>To: </h2>
                    <input type='text' className='input-field' placeholder='Destination'/>
                </div>
            </div>

            <div className='info-form'>
                <div className='info-container'>
                    <h2>From: </h2>
                    <input type='text' className='input-field' placeholder='Departure Time'/>
                </div>
                <div className='info-container'>
                    <h2>To: </h2>
                    <input type='text' className='input-field' placeholder='Arrival Time'/>
                </div>
            </div>

            <div className='centered'>
                <a href='/ride-search' className='centered-links'>
                    <button className='action-btn'>Search Rides</button>
                </a>
            </div>
        </section>
    )
}

//JS Code
export default RideRequest 