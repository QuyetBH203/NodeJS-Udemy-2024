import dotenv from 'dotenv';
dotenv.config({path:'./config.env'});
import express from 'express';
import morgan from 'morgan';

import tourRouter from './routes/tourRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();

//send json data
// console.log(process.env.NODE_ENV);
// console.log(process.env.PORT);
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('tiny'));
}

app.use(express.json());
app.use(express.static('./public'));
app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

export default app;