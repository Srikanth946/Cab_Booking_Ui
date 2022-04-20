import {bookCabService, updateTripService,viewTripService,endTripService} from '../services/TripService'

const EndTrip = () =>{

    const endCab= (e) =>{
        e.preventDefault();
        endTripService().then((response)=>{
            // console.log(booktrip.fromLocation+"  ended");
            console.log(response);
            console.log(response.data.customer.userName);
            alert(response.data.customer.userName+" Your Trip Ended ");

        })
        .catch(()=>{
            alert("cab could not be ended")
        })
    }
    return(
        <div className="container">
            <div className="row">
                <div id ="endtripcard"className="card col-md-6 offset-md-3 offset-md-3 text-center mt-5">
                    <h3 className="text-center card-header mt-2">EndTrip</h3>
                    <div className="card-body">
                        <input
                            type="submit"
                            className="btn btn-primary form-control mb-3 mt-3"
                            value="End Trip"
                            onClick={endCab}
                        />

                    </div>

                </div>


            </div>

        </div>
    )
}

export default EndTrip;