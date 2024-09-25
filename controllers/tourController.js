
const Tour = require('./../models/tourModel');

const checkBody = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    if(!name || !price){
        return res.status(400).json({
            status: 'fail',
            message: `Name or price are not present`
        })
    }
    next();
};
const getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime
    });
};

const getTour = (req, res) =>{
    res.status(200).json({
        status: 'success',
        data: {
            tour: req.tour
        }
    });
};

const createTour = (req, res) => {

};

const updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: "<Updated tour here...>"
        }
    })
};

const deleteTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: "<Deleted tour here...>"
        }
    })
};

module.exports = {
    getAllTours, createTour, deleteTour, updateTour, getTour, checkBody
};