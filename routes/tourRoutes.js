const express = require("express");
const tourController = require('./../controllers/tourController');
const {checkId, checkBody} = require("../controllers/tourController");
const router = express.Router();

router.param('id', checkId);

router
    .route('/')
    .get(tourController.getAllTours)
    .post(checkBody,tourController.createTour);
router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = router;