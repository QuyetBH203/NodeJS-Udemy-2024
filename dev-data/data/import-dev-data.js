import dotenv from "dotenv";
dotenv.config({ path: "../../config.env" });
import mongoose from "mongoose";

import { readFileSync } from "fs";
import Tour from "../../models/tourModel.js";


const DB = process.env.DATABASE


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

// read json file

const tours = JSON.parse(readFileSync('tours-simple.json', 'utf-8'));

console.log(process.argv);
console.log(process.env.DATABASE_PASSWORD)


const importData = async () => {
    try {
        await Tour.create(tours);
        console.log('data successfully loaded');
        process.exit();
        
    }catch(err){
        console.log(err);
    }
}

// DELETE ALL DATA FROM COLLECTION

const deleteData = async () => { 
    try {
        await Tour.deleteMany();
        console.log('data successfully deleted');
        process.exit();
        
    } catch (err) {
        console.log(err)
    }
}

if (process.argv[2] === '--import') {
    importData();
} else if(process.argv[2] === '--delete') {
    deleteData();
}