import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ViewTrips from '../components/ViewTrips';

import Booktrip from '../components/BookTrip';


const Routes = () =>{
    return(
        <div>
            <Router>
                <div>
                    <Header/>
                    <div>
                        <Switch>
                            <Route path="/book" ><Booktrip/></Route>
                            <Route path="/view" ><ViewTrips/></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default Routes;