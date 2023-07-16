const express = require("express");

// for mcq
const createQuestionControllerMcq_3 = require("../../../controllers/questionController/mcq_3/createQuestionController");
const getAllQuestionControllerMcq_3 = require("../../../controllers/questionController/mcq_3/getAllQuestionController");
const getOneQuestionControllerMcq_3 = require("../../../controllers/questionController/mcq_3/getOneQuestionController");
const deleteQuestionControllerMcq_3 = require("../../../controllers/questionController/mcq_3/deleteQuestionController");


const router = express.Router();


router.post('/questions', createQuestionControllerMcq_3)
router.get('/questions/:classes', getAllQuestionControllerMcq_3)
router.get('/questions/:classes/:id', getOneQuestionControllerMcq_3)
router.delete('/questions/:classes/:id', deleteQuestionControllerMcq_3)



module.exports = router;