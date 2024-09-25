
const Tour = require('./../models/tourModel');

const getAllTours = async (req, res) => {
    const tours = await Tour.find();
    try{
        res.status(200).json({
            status: 'success',
            results: tours.length,
            data: {
                tours
            }
        })
    } catch(error){
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
    }
};

const getTour = async (req, res) =>{
    try{
        const tour = await Tour.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        });
    } catch(error){
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
    }
};

const createTour = async (req, res) => {

    try{
        const newTour = await Tour.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        });
    } catch (err){
        res.status(418).json({
            status: 'fail', message: err.message
        })
    }
};

const updateTour = async (req, res) => {
    try{
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        });
    } catch(error){
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
    }
};

const deleteTour = async (req, res) => {
    try{
        const tourToDelete = await Tour.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                tourToDelete
            }
        });
    } catch(error){
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
    }
};

module.exports = {
    getAllTours, createTour, deleteTour, updateTour, getTour
};