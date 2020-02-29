import express from 'express';
import connectionDatabase from './config/db';
import{check,validationResult} from 'express-validator';

const app= express();
//connect database
connectionDatabase();

app.use(express.json({extended: false}));

// Api endpoints
/**
 * @route
 * @desc test end point
 */

app.get('/',(req,res)=>
res.send('http get request sent to root api endpoint'),

);

/**
 * @route post api/user
 * @dcsc Register user
 */
app.post('/api/users', 
[
    check('name','Please enter your name')
    .not()
    .isEmpty(),
    check('email','Please enter a valid email')
    .isEmail(),
    check('password','Please enter a password with 6 or more characters')
    .isLength({min:6})


],
(req,res)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(422).json({error: error.array()});
    }
    else{
     return res.send(req.body);
    }
    
    
});

 app.listen(3000,() => console.log(`Express server running port on 3000`));