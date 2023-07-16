const express = require("express");

// for mcq

const questionPaperCq = require('../../controllers/questionPaper/cq')
const questionPaperMcq = require("../../controllers/questionPaper/mcq");



const router = express.Router();

router.get('/cq', questionPaperCq)
router.get('/mcq', questionPaperMcq)




module.exports = router;