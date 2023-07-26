import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URI!)
        const conncetion = mongoose.connection;

        conncetion.on('connected', ()=>{
            console.log('MongoDB connected successfully');
            
        })
        conncetion.on('error', (err)=>{
            console.log('MongoDB connected error. Please make sure MongoDB is running' + err);
            process.exit();
        })
    } catch (error){
        console.log('Someting goes wrong');
        console.log(error);
        
        
    }
}