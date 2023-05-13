import { drivers } from './data/drivers'

const RideSearch = () => {

    const closePopup = () => {
        document.getElementById('request-popup').style.display='none';
    }

    const requestRide = (driverid?:string, drivername?:string, driverdistance?:string) => {
        console.log(driverid)
        if (driverid !== null){
            document.getElementById(driverid+'-btn').innerHTML = 'Waiting for Response...';
        }

        let popup = document.createElement("div"); popup.classList.add('request-popup'); popup.id = 'request-popup'
            let message_title = document.createElement('h3'); message_title.innerHTML = 'Hi there!';
            let message = document.createElement('p');
            message.innerHTML = 'You have sent a carpool request to ' + drivername + ' . They are currently ' + driverdistance + ' from your current location. We will notify you if they accept or decline your request. Safe travels!'
            let close_btn = document.createElement('button'); close_btn.id='close-btn'; close_btn.classList.add('action-btn'); close_btn.innerHTML = 'ok'; close_btn.onclick=closePopup
            popup.appendChild(message_title);
            popup.appendChild(message);
            popup.appendChild(close_btn);
        document.getElementById('ride-request-page').appendChild(popup);
    }

    return(
        <div id='ride-request-page'>
            <div className='left-shift'>
                Find Rides
            </div>

            {drivers.map((data, key) => {
                return (
                    <div key={key} id={data.driver_id} className='driver-containers'>
                        <div className='section_1'>
                            <h4>{data.driver_name}</h4>
                            <h5>This driver is {data.distance} away from you.</h5>
                        </div>
                        <div className='section_2'>
                            <button onClick={() => requestRide(data.driver_id, data.driver_name, data.distance)} id={data.driver_id + '-btn'}>Request a Ride</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default RideSearch;