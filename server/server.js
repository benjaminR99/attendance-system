const path = require('path')
const express = require('express')
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3500 ;
const {logger} = require('./middleware/logger');
const handleError = require('./middleware/errorHandler');
const {corsOptions} = require('./config/allowedOrigin')

app.use(logger);
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());

app.use(cors(corsOptions));

app.use('/',require('./Routers/root'));




app.all('*',(req,res)=>{
    if(req.accepts('html')){
        res.status(404).sendFile(path.join(__dirname,'views','404.html'))
    }else if(req.accepts('json')){
        res.status(404).json({"error":"page not found"})
    }else{
        res.type('txt').status(404).send("the requested page is not found")
    }
})

app.use(handleError);

app.listen(PORT, ()=>{
    console.log("listening to PORT ", PORT)
});
