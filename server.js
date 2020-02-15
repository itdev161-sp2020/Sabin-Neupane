import express from 'express';
import connectionDatabase from './config/db';

const app= express();
//connect database
connectionDatabase();

app.get('/',(req,res)=>
res.send('http get request sent to root api endpoint')
);
 app.listen(3000,() => console.log('Express server running port on 3000'));