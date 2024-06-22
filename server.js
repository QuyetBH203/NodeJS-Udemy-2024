import mongoose from 'mongoose';
import app from './app.js';

const DB = process.env.DATABASE
// console.log(DB)

mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() =>{
    console.log('connection successful');
    

}).catch((err) =>{
    console.log('no connection');
    console.log(err.message);
})


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    debugger
    console.log(`app listening on port ${PORT}`);
})