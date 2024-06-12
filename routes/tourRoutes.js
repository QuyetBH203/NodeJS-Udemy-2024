import express from 'express';
import {
    getAllTours,
    getTour,
    createTour,
    updateTour,
    deleteTour   
} from '../controllers/tourControllers.js';




const router = express.Router();

//create a checkBody middleware
//check if body contains the name and price property
//if not, send back 400 (bad request)
//add it to the post handler stack

router.route('/')
    .get(getAllTours)
    .post(createTour)

router.route('/:id')
    .get(getTour).
    patch(updateTour).
    delete(deleteTour)

export default router;