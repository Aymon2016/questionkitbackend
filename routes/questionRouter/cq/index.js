const express = require("express");


const createQuestionControllerCq = require("../../../controllers/questionController/cq/createQuestionController");
const getAllQuestionControllerCq = require("../../../controllers/questionController/cq/getAllQuestionController");
const getOneQuestionControllerCq = require("../../../controllers/questionController/cq/getOneQuestionController");
const deleteQuestionControllerCq = require("../../../controllers/questionController/cq/deleteQuestionController");
const router = express.Router();


router.post('/questions', createQuestionControllerCq)
router.get('/questions/:classes', getAllQuestionControllerCq)
router.get('/questions/:classes/:id', getOneQuestionControllerCq)
router.delete('/questions/:classes/:id', deleteQuestionControllerCq)


module.exports = router;