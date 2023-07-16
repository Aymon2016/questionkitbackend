const express = require("express");

// for mcq
const createQuestionControllerMcq_1 = require("../../../controllers/questionController/mcq/createQuestionController");
const getAllQuestionControllerMcq_1 = require("../../../controllers/questionController/mcq/getAllQuestionController");
const getOneQuestionControllerMcq_1 = require("../../../controllers/questionController/mcq/getOneQuestionController");
const deleteQuestionControllerMcq_1 = require("../../../controllers/questionController/mcq/deleteQuestionController");


const router = express.Router();


router.post('/questions', createQuestionControllerMcq_1)
router.get('/questions/:classes', getAllQuestionControllerMcq_1)
router.get('/questions/:classes/:id', getOneQuestionControllerMcq_1)
router.delete('/questions/:classes/:id', deleteQuestionControllerMcq_1)



module.exports = router;