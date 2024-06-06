import express from 'express';
import {readFile, readFileSync,writeFile} from 'fs';
import { request } from 'http';
import morgan from 'morgan';

const app = express();

//send json data
app.use(morgan('tiny'));
app.use(express.json());
app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

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
    if (!tour) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        
        })
    }

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
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here...>'
        }
    
    })
}

const deleteTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    res.status(204).json({
        status: 'success',
        data: {
            tour: null
        }
    
    })
}

// app.get('/api/v1/tours', getAllTours)
// app.get('/api/v1/tours/:id/', getTour )
// app.post('/api/v1/tours', createTour )
// app.patch('/api/v1/tours/:id', updateTour)
// app.delete('/api/v1/tours/:id', deleteTour)

app.route('/api/v1/tours')
    .get(getAllTours)
    .post(createTour)

app.route('/api/v1/tours/:id')
    .get(getTour).
    patch(updateTour).
    delete(deleteTour)

const PORT=8081;

app.listen(PORT, () =>{
    console.log(`app listening on port ${PORT}`);
})