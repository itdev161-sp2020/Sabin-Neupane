import mongoose from 'mongoose';
import config from 'config';

//get connection string 
const db= config.get('mongoURL');

const connectDatabase = async()=>{
    try{
        await mongoose.connect(db,{
useUnifiedTopology: true,
useCreateIndex: true
        });
console.log('connected to MongoDB');
    }catch (error){
       
            console.error(error.message);
            process.exit(1);
        
    }
};

export default connectDatabase;