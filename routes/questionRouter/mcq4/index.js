const express = require("express");

// for mcq
const createQuestionControllerMcq_4 = require("../../../controllers/questionController/mcq_4/createQuestionController");
const getAllQuestionControllerMcq_4 = require("../../../controllers/questionController/mcq_4/getAllQuestionController");
const getOneQuestionControllerMcq_4 = require("../../../controllers/questionController/mcq_4/getOneQuestionController");
const deleteQuestionControllerMcq_4 = require("../../../controllers/questionController/mcq_4/deleteQuestionController");


const router = express.Router();


router.post('/questions', createQuestionControllerMcq_4)
router.get('/questions/:classes', getAllQuestionControllerMcq_4)
router.get('/questions/:classes/:id', getOneQuestionControllerMcq_4)
router.delete('/questions/:classes/:id', deleteQuestionControllerMcq_4)



module.exports = router;