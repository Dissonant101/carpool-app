import { drivers } from './data/drivers'

const RideSearch = () => {

    const requestRide = (driverid?:string | null) => {
        console.log(driverid)
        if (driverid !== null){
            document.getElementById(driverid+'-btn').innerHTML = 'Waiting for Response...';
        }
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
                            <button onClick={() => requestRide(data.driver_id)} id={data.driver_id + '-btn'}>Request a Ride</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default RideSearch;