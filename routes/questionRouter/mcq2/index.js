const express = require("express");

// for mcq
const createQuestionControllerMcq_2 = require("../../../controllers/questionController/mcq_2/createQuestionController");
const getAllQuestionControllerMcq_2 = require("../../../controllers/questionController/mcq_2/getAllQuestionController");
const getOneQuestionControllerMcq_2 = require("../../../controllers/questionController/mcq_2/getOneQuestionController");
const deleteQuestionControllerMcq_2 = require("../../../controllers/questionController/mcq_2/deleteQuestionController");


const router = express.Router();


router.post('/questions', createQuestionControllerMcq_2)
router.get('/questions/:classes', getAllQuestionControllerMcq_2)
router.get('/questions/:classes/:id', getOneQuestionControllerMcq_2)
router.delete('/questions/:classes/:id', deleteQuestionControllerMcq_2)



module.exports = router;