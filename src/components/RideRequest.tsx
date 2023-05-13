
const RideRequest = () => {
    return (
        <section id='ride-request-page'>
            <div className='left-shift'>
                Request Rides
            </div>
            <div className='info-form'>
                <div className='info-container'>
                    <h2>From: </h2>
                    <input type='text' className='input-field' placeholder='Current Location'/>
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
                <button className='action-btn'>Search Rides</button>
            </div>
        </section>
    )
}

export default RideRequest 