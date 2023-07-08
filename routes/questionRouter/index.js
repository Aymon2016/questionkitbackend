const express = require("express");
const createQuestionController = require("../../controllers/questionController/createQuestionController");
const getAllQuestionController = require("../../controllers/questionController/getAllQuestionController");

const router = express.Router();


router.post('/questions', createQuestionController)
router.get('/questions', getAllQuestionController)


module.exports = router;