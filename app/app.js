const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { globalErrorHandler } = require('../middlewares/errorHandler/errorhandler')
// const userRouter = require('../routes/userRouter/index')
const questionRouter = require('../routes/questionRouter/index')



const app = express()


app.use([morgan('dev'), cors(), express.json()]);


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Content-Type, Cookie');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials
    next();
});
// app.use('/api/v1', userRouter)
app.use('/api/v1', questionRouter)




app.all("*", (req, res) => {
    res.status(404).json({ error: "Resource not found" });
});



/*=============================================
=            error handler            =
=============================================*/

app.use(globalErrorHandler)

/*=====  End of error handler  ======*/




module.exports = app;