const express = require("express");

// for mcq

const questionPaperCq = require('../../controllers/getQuestionPaper/cq')
const questionPaperMcq = require("../../controllers/getQuestionPaper/mcq");



const router = express.Router();

router.get('/cq', questionPaperCq)
router.get('/mcq', questionPaperMcq)




module.exports = router;