const express = require("express");
const createQuestionController = require("../../controllers/questionController/createQuestionController");
const getAllQuestionController = require("../../controllers/questionController/getAllQuestionController");
const getOneQuestionController = require("../../controllers/questionController/getOneQuestionController");
const deleteQuestionController = require("../../controllers/questionController/deleteQuestionController");
const router = express.Router();


router.post('/questions', createQuestionController)
router.get('/questions/:classes', getAllQuestionController)
router.get('/questions/:classes/:id', getOneQuestionController)
router.delete('/questions/:classes/:id', deleteQuestionController)


module.exports = router;