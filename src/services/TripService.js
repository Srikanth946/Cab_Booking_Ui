import axios from 'axios';
const springBootAppUrl = `http://localhost:8088/Trip`;

const bookCab = (trip) => {
    console.log(`BookCab`);
    return axios.post(`${springBootAppUrl}/bookCab`,trip);
}

const updateTrip = () => {
    console.log(`BookCab`);
    return axios.put(`${springBootAppUrl}/update`);
}

const viewTrip = () => {
    console.log(`BookCab`);
    return axios.get(`${springBootAppUrl}/view`);
}

const endTrip = () => {
    console.log(`BookCab`);
    return axios.put(`${springBootAppUrl}/endTrip`);
}

export {bookCab, updateTrip,viewTrip,endTrip};