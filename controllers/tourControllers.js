import { readFileSync, writeFile } from 'fs';


const tours = JSON.parse(readFileSync('./dev-data/data/tours-simple.json', 'utf-8'));
const getAllTours = (req, res) => {
    console.log(req.requestTime)
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: tours.length,
        data:{
            tours:tours,
            
        }
    })

}

const getTour = (req, res) => {
    debugger
    console.log(req.params)
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);
    // console.log(typeof req.params.id)
    // let id = parseInt(req.params.id)
    // console.log(tours[id])

    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
        
    })
}

const createTour = (req,res) =>{
    debugger
    const newId=tours[tours.length-1].id+1;

    const newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);

    writeFile('./dev-data/data/tours-simple.json', JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        })
    })

  
}

const updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here...>'
        }
    
    })
}

const deleteTour = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: {
            tour: null
        }
    
    })
}

const checkID = (req, res, next, val) => { 
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    next();
}

export {
    getAllTours,
    getTour,
    createTour,
    updateTour,
    deleteTour,
    checkID
}
