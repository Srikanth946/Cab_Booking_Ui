import { useState } from "react";
import Trip from '../Model/Trip';
import driver from '../Model/driver';
import {bookCabService, updateTripService,viewTripService,endTripService} from '../services/TripService'
import  { setTripList, getTripsList } from '../redux/TripSlice'
import { useDispatch, useSelector } from "react-redux";

const Booktrip = () =>{
    const[trip, setTrip]=useState([]);
    const[id,setId]=useState('');

    const dispatch = useDispatch();
    const TripsListStore = useSelector((state) => state.Trip.TripsList);
    const submitGetTripById = (evt) => {
        // console.log(evt.data);
        evt.preventDefault();
        viewTripService()
            .then((response) => {
                // console.log(response.data);
                dispatch(getTripsList(response.data));
                // setTrip(response.data);
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
        <div className='container' >
            <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-10">
            <p>View Trip History</p>
            <div className="form form-group" >
            <input type="submit" className="form-control mb-3 mt-3 btn btn-primary" value="Get Trips" onClick={submitGetTripById} />
            </div>
            <div>
                <div className='row'>
                    <table className='table table-bordered table-striped'>
                        <thead className="thead-dark">
                           
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
                              TripsListStore.map((e)=>
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