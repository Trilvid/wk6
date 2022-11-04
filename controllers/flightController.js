const fs = require('fs');
const flights = require('./../models/Flight');

exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}

// get all flights 
exports.getAllFlights = async (req, res) => {
    try{
    const flight = await require('./../models/Flight');
    console.log('all flights booked');
    res.status(200).json({
        status: "success",
        message: "these are flights booked so far",
        flight
    });
}
catch (err) {
    res.status(500).json({
        status: "failed",
        message: err.message
    });
}
}

// get single flight
exports.getAFlight = async (req, res) => {
    try {
    console.log('my booked flights');
    const id = req.params.id*1;
    const flightx = await flights.find(el => el.id === id);

    if (!flightx) {
        console.log("failed big time");
        res.status(500).json({
            status: "failed",
            message: "sorry this route does not exist"
        });
    }

    else{
    res.status(200).json({
        status: "success",
        message: "my booked flights",
        flightx

    });
}

}
catch (err) {
    res.status(500).json({
        status: "failed",
        message: err.message
    });
}
}

// create new flight
exports.bookFlights = async (req, res) => {
    try{
        const flight = require('./../models/Flight');
        const fly = await req.body;
        flight.push(fly);

        res.status(201).json({
            status: "success",
            message: "Flight Booked",
            fly,
            });
}
catch (err) {
    res.status(500).json({
        status: "failed",
        message: err.message
    })
}
}

// updating a flight
exports.changeFlight = async (req, res) => {
    console.log('Flights updated');

    try{
    const id = req.params.id*1;
    const flightx = flights.find(el => el.id === id);

    if (!flightx) {
        console.log("failed big time");
        res.status(500).json({
            status: "failed",
            message: "sorry this route is not available"
        });
    }
    else{
        const fly = req.body;
        flights.push(fly);
    
        res.status(200).json({
           status: "success",
           data:{
               flights: ' Changed flight here '
           }
        });
    }
}
catch (err) {
    res.status(500).json({
        status: "failed",
        message: err.message
    })
}
}

// deleting a flight
exports.cancelFlight = async (req, res) => {
try{
    const id = req.params.id*1;
    const flightx = flights.find(el => el.id === id);

    if (!flightx) {
        console.log("failed big time");
        res.status(500).json({
            status: "failed",
            message: "sorry this route is not available"
        });
    }
    else{
    delete flights[id];
    res.status(204).json({
       status: "success",
       data: null
    });
    }
}
    catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
    
}



