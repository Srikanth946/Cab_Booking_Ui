import {bookCab, updateTrip,viewTrip,endTrip} from '../services/TripService'
import { useState } from "react";
const Booktrip = () =>{
    const[booktrip, setBookTrip]= useState({
        fromLocation:'',
        toLocation:''
    });
    const [tripdata, setTripdata]= useState([]);
    const addTrip=(e)=>{
        console.log(e.target.value);
        setBookTrip({
            ...booktrip,[e.target.name]:e.target.value
        })
        
    }

    const addCab = (e) =>{
        e.preventDefault();
        console.log(booktrip.fromLocation);
        console.log(booktrip.toLocation);
        let tripDetails = { ...booktrip}
        bookCab(tripDetails).then((response)=>{
                console.loge(response.data.value);
                setTripdata(response.data);
                alert("Cab Booked Succesfully")
            })
            .catch(()=>{
               
                alert("Cab could not be booked")

            })

    }

    const endCab= (e) =>{
        e.preventDefault();
        endTrip().then((response)=>{
            console.log(booktrip.fromLocation+"  ended");
            console.log(response);
            console.log(response.data.customer.userName);
            alert(response.data.customer.userName+" Your Trip Ended ");

        })
        .catch(()=>{
            alert("cab could not be ended")
        })
        
    }
    return(
        

        <div>
            <div className="container">
                <div className="row">
                    <div id ="bookcabcard" className="card col-md-6 offset-md-3 offset-md-3 text-center mt-5">
                        <h3 className="text-center card-header mt-2">Enter Trip details</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label className='card-title'>Enter Pickup Location</label>
                                    <input
                                        type="text"
                                        placeholder="Enter pickup Location"
                                        name="fromLocation"
                                        className="form-control"
                                        value={booktrip.fromLocation}
                                        onChange={addTrip}
                                    />
                                    <label className='card-title'>Enter Drop Location</label>
                                    <input
                                        type="text"
                                        placeholder="Enter drop Location"
                                        name="toLocation"
                                        className="form-control"
                                        value={booktrip.toLocation}
                                        onChange={addTrip}
                                    />
                                    <input
                                        type="submit"
                                        className="btn btn-primary form-control mb-3 mt-3"
                                        value="Book Cab"
                                        onClick={addCab}
                                    />
                                    

                                </div>
                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </div>


        // <div className="container">
        //     <p className="display-4 text-primary">Trip Details</p>
        //     <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-10">
        //         <p>Enter Trip Details</p>
        //         <div className="form form-group">
        //             <input
        //                 type="text"
        //                 id="fromLocation"
        //                 name="fromLocation"
        //                 className="form-control mb-3 mt-3"
        //                 value={booktrip.fromLocation}
        //                 onChange={addTrip}
        //                 placeholder="Enter PickUp Location"
        //             />
        //             <input
        //                 type="text"
        //                 id="toLocation"
        //                 name="toLocation"
        //                 className="form-control mb-3 mt-3"
        //                 value={booktrip.toLocation}
        //                 onChange={addTrip}
        //                 placeholder="Enter Drop Location"
        //             />
        //             <input
        //                 type="submit"
        //                 className="btn btn-primary form-control mb-3 mt-3"
        //                 value="Book Cab"
        //                 onClick={addCab}

        //             />
        //             <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-10">
        //                 <table className="table">
        //                         <thead className='thead-dark'>
        //                             <tr>
        //                                 <th>Cab Type</th>
        //                                 <th>Bill</th>
        //                                 <th>From Location</th>
        //                                 <th>To Location</th>
        //                                 <th>Driver Id</th>
        //                             </tr>
        //                         </thead>
        //                         <tbody>
        //                             {
        //                                 tripdata.map((e)=>{
        //                                 <tr key={e.customerId}>
        //                                     <td>{e.cabtype}</td>
        //                                     <td>{e.bill}</td>
        //                                     <td>{e.fromLocation}</td>
        //                                     <td>{e.toLocation}</td>
        //                                     <td>{e.driverId}</td>
        //                                 </tr>
        //                                 })
        //                             }
        //                         </tbody>
        //                 </table>


        //             </div>

        //         </div>

        //     </div>
        //     <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-10  ">
        //         <input
        //             type="submit"
        //             className='btn btn-primary form-control mb-3 mt-3'
        //             value="End Trip"
        //             onClick={endCab}
        //         />
        //     </div>

        // </div>


        ////////////////////////




    );
}

export default Booktrip;