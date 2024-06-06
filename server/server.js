require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3500 ;
const errorHandler = require('./middleware/errorHandler');
const cors  =require('cors');
const corsOptions = require('./config/corsOptions');


app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(cors(corsOptions));


app.use('^/$|index(.html)?',require('./Routers/root'));
app.use('/auth', require('./Routers/authRoutes'));


app.all('*',(req,res)=>{
    if(req.accepts('html')){
        res.status(404).sendFile(path.join(__dirname,'views','404.html'))
    }else if(req.accepts('json')){
        res.status(404).json({"error":"page not found"})
    }else{
        res.type('txt').status(404).send("the requested page is not found")
    }
});


app.use(errorHandler);


app.listen(PORT, ()=>{
    console.log("listening to PORT ", PORT)
});
