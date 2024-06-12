
import Tour from '../models/tourModel.js';


const getAllTours = async (req, res) => {
    debugger
    try {
        const tours = await Tour.find();
        res.status(200).json({
            status: 'success',
            result: tours.length,
            data: {
                tours
            }

        })

    } catch (err) {
        res.status(404).json({
            message: 'fail',
            error: err.message
        })
        
    }
    

}

const getTour = async (req, res) => {
    debugger
    try {
        const tour = await Tour.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
}

const createTour = async (req, res) => {
    debugger
    try {
        const newTour = await Tour.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }

        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent!'
        })
    }




}

const updateTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: 'success',
            data: {
               tour
            }
    
        })
        
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
   
}

const deleteTour = async (req, res) => {
    try {
        await Tour.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                tour: null
            }
    
        })
        
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
    
}


export {
    getAllTours,
    getTour,
    createTour,
    updateTour,
    deleteTour,

}
