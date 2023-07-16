
const questionCollection = require('../../services/questionServices/cq/questionServices')
const CqQuestionPaper = async (req, res) => {

    const classes = req.query.classes
    const bookName = req.query.bookName
    const chapter = req.query.chapter || null

    try {
        if (classes === '6') {
            const folderPath = 'db/cq/class6'
            const filePath = path.join(folderPath, 'class_6.json');
            const Question = await questionCollection.getAllQuestions(filePath)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question = Question.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question = question.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo



            // question k modify kore response korbo jeno ans na jai 
            const response = ''
            return res.status(200).json({ message: "Question Found", Question: response });

        }
        if (classes === '7') {
            const folderPath = 'db/cq/class7'
            const filePath = path.join(folderPath, 'class_7.json');
            const Question = await questionCollection.getAllQuestions(filePath)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question = Question.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question = question.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo



            // question k modify kore response korbo jeno ans na jai 
            const response = ''
            return res.status(200).json({ message: "Question Found", Question: response });


        }
        if (classes === '8') {
            const folderPath = 'db/cq/class8'
            const filePath = path.join(folderPath, 'class_8.json');
            const Question = await questionCollection.getAllQuestions(filePath)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question = Question.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question = question.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo



            // question k modify kore response korbo jeno ans na jai 
            const response = ''
            return res.status(200).json({ message: "Question Found", Question: response });

        }
        if (classes === '9' || classes === '10') {
            const folderPath = 'db/cq/class9or10'
            const filePath = path.join(folderPath, 'class_9or10.json');

            const Question = await questionCollection.getAllQuestions(filePath)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question = Question.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question = question.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo



            // question k modify kore response korbo jeno ans na jai 
            const response = ''
            return res.status(200).json({ message: "Question Found", Question: response });

        }
        if (classes === '1' || classes === '12') {
            const folderPath = 'db/cq/class11or12'
            const filePath = path.join(folderPath, 'class_11or12.json');

            const Question = await questionCollection.getAllQuestions(filePath)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question = Question.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question = question.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo



            // question k modify kore response korbo jeno ans na jai 
            const response = ''
            return res.status(200).json({ message: "Question Found", Question: response });

        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });

    }

}
module.exports = CqQuestionPaper;