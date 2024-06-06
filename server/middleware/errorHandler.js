const handleError = async(err, req, res, next) =>{
    const msg = `${err.name} ${err.message} ${req.method} ${req.url}`
    console.log(msg) ;
    const status = res.statusCode ? res.statusCode :500 ;
    res.status(status).json({"message":`${err.message}`})
}

module.exports  = handleError