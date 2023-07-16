const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { globalErrorHandler } = require('../middlewares/errorHandler/errorhandler')
// for admin
const userRouter = require('../routes/userRouter/index')
const cqRouter = require('../routes/questionRouter/cq/index')
const mcqRouter = require('../routes/questionRouter/mcq/index')
const mcq2Router = require('../routes/questionRouter/mcq2/index')
const mcq3Router = require('../routes/questionRouter/mcq3/index')
const mcq4Router = require('../routes/questionRouter/mcq4/index')

// for users 
const questonPaperRouter = require('../routes/questonPaperRouter/index')






const app = express()


app.use([morgan('dev'), cors(), express.json()]);


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Content-Type, Cookie');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials
    next();
});
// for admin
app.use('/api/v1', userRouter)
app.use('/api/v1/cq', cqRouter)
app.use('/api/v1/mcq_1', mcqRouter)
app.use('/api/v1/mcq_2', mcq2Router)
app.use('/api/v1/mcq_3', mcq3Router)
app.use('/api/v1/mcq_4', mcq4Router)
// for users
app.use('/api/v1/question_paper', questonPaperRouter)




app.all("*", (req, res) => {
    res.status(404).json({ error: "Resource not found" });
});



/*=============================================
=            error handler            =
=============================================*/

app.use(globalErrorHandler)

/*=====  End of error handler  ======*/




module.exports = app;