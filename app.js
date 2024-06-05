import express from 'express';
import {readFile, readFileSync} from 'fs';

const app = express();

//send json data
app.use(express.json());

// app.get('/', (req,res) =>{
//     res.status(200).json({
//         message:'Welcome to the API',
//         app_name:'NodeJS API',
//     })

// })

// app.post('/', (req,res) =>{
//     res.send('you can post to this endpoint');
// })

const tours=JSON.parse(readFileSync('./dev-data/data/tours-simple.json', 'utf-8'));

app.get('/api/v1/tours', (req,res) =>{
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data:{
            tours:tours,
            
        }
    })

})

debugger
app.post('/api/v1/tours', (req,res) =>{
    debugger
    const newId=tours[tours.length-1].id+1;

    const newTour = Object.assign({id: newId}, req.body);

    res.send('done');
})

const PORT=8081;

app.listen(PORT, () =>{
    console.log(`app listening on port ${PORT}`);
})