import { useState } from "react";
import Trip from '../Model/Trip';
import driver from '../Model/driver';
import {bookCab, updateTrip,viewTrip,endTrip} from '../services/TripService'

const Booktrip = () =>{
    const[trip, setTrip]=useState([]);
    const[id,setId]=useState('');

    const submitGetTripById = (evt) => {
        console.log(evt.data);
        evt.preventDefault();
        viewTrip()
            .then((response) => {
                console.log(response.data);
                setTrip(response.data);
            })
            .catch((error) => {
                alert(error);
            })
    }

    const handleChange = (evt) => {
        console.log(evt.target.value);
        setId(evt.target.value);
    }

    return(
        <div class='container' >
            <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-10">
            <p>View Trip History</p>
            <div className="form form-group" >
            <input type="submit" className="form-control mb-3 mt-3 btn btn-primary" value="Get Trips" onClick={submitGetTripById} />
            </div>
            <div>
                <div className='row'>
                    <table className='table table-stripped table-bordered'>
                        <thead>
                           
                            <tr>
                                <th>tripBooking Id</th>
                                <th>From Location</th>
                                <th>To Location</th>
                                <th>Bill</th>
                                <th>driver Id</th>
                                <th>driver rating</th>
                                <th>Cab Type</th>
     
                            </tr>
                            
                                          
                      </thead>
                      <tbody>
                          {
                              trip.map((e)=>
                              <tr key={e.tripBookingId}>
                                  <td>{e.tripBookingId}</td>
                                  <td>{e.fromLocation}</td>
                                  <td>{e.toLocation}</td>
                                  <td>{e.bill}</td>
                                  <td>{e.driver.driverId}</td>
                                  <td>{e.driver.rating}</td>
                                  <td>{e.driver.cab.carType}</td>
                                  
                                  
                              </tr>

                              )
                          }
                      </tbody>
                  
                    </table>
                </div>
            
            </div>

           
            </div>

    </div>
    )
}
export default Booktrip;