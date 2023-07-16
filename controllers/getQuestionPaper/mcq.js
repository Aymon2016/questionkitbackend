
const questionCollection = require('../../services/questionServices/mcq/questionServices')
const questionCollection2 = require('../../services/questionServices/mcq_2/questionServices')
const questionCollection3 = require('../../services/questionServices/mcq_3/questionServices')
const questionCollection4 = require('../../services/questionServices/mcq_4/questionServices')
const McqQuestionPaper = async (req, res) => {

    const classes = req.query.classes
    const bookName = req.query.bookName
    const chapter = req.query.chapter || null

    try {
        if (classes === '6') {
            //mcq er jonoo
            const folderPath = 'db/mcq/class6'
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


            // mcq_2 er jonno
            const folderPath2 = 'db/mcq/class6'
            const filePath2 = path.join(folderPath, 'class_6.json');
            const Question2 = await questionCollection2.getAllQuestions(filePath2)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question2 = Question2.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question2 = question2.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo


            //mcq 3 er jonno 
            const folderPath3 = 'db/mcq/class6'
            const filePath3 = path.join(folderPath, 'class_6.json');
            const Question3 = await questionCollection3.getAllQuestions(filePath3)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question3 = Question3.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question3 = question3.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo

            //mcq 4 er jonno 
            const folderPath4 = 'db/mcq/class6'
            const filePath4 = path.join(folderPath, 'class_6.json');
            const Question4 = await questionCollection4.getAllQuestions(filePath4)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question4 = Question4.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question4 = question4.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo


            // question k modify kore response korbo jeno ans na jai 
            const response = ''
            return res.status(200).json({ message: "Question Found", Question: response });

        }
        if (classes === '7') {
            //mcq er jonoo
            const folderPath = 'db/mcq/class7'
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


            // mcq_2 er jonno
            const folderPath2 = 'db/mcq/class7'
            const filePath2 = path.join(folderPath, 'class_7.json');
            const Question2 = await questionCollection2.getAllQuestions(filePath2)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question2 = Question2.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question2 = question2.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo


            //mcq 3 er jonno 
            const folderPath3 = 'db/mcq/class7'
            const filePath3 = path.join(folderPath, 'class_7.json');
            const Question3 = await questionCollection3.getAllQuestions(filePath3)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question3 = Question3.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question3 = question3.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo

            //mcq 4 er jonno 
            const folderPath4 = 'db/mcq/class7'
            const filePath4 = path.join(folderPath, 'class_7.json');
            const Question4 = await questionCollection4.getAllQuestions(filePath4)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question4 = Question4.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question4 = question4.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo


            // question k modify kore response korbo jeno ans na jai 
            const response = ''
            return res.status(200).json({ message: "Question Found", Question: response });

        }
        if (classes === '8') {
            //mcq er jonoo
            const folderPath = 'db/mcq/class8'
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


            // mcq_2 er jonno
            const folderPath2 = 'db/mcq/class8'
            const filePath2 = path.join(folderPath, 'class_8.json');
            const Question2 = await questionCollection2.getAllQuestions(filePath2)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question2 = Question2.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question2 = question2.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo


            //mcq 3 er jonno 
            const folderPath3 = 'db/mcq/class8'
            const filePath3 = path.join(folderPath, 'class_8.json');
            const Question3 = await questionCollection3.getAllQuestions(filePath3)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question3 = Question3.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question3 = question3.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo

            //mcq 4 er jonno 
            const folderPath4 = 'db/mcq/class8'
            const filePath4 = path.join(folderPath, 'class_8.json');
            const Question4 = await questionCollection4.getAllQuestions(filePath4)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question4 = Question4.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question4 = question4.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo


            // question k modify kore response korbo jeno ans na jai 
            const response = ''
            return res.status(200).json({ message: "Question Found", Question: response });

        }
        if (classes === '9' || classes === '10') {
            //mcq er jonoo
            const folderPath = 'db/mcq/class9or10'
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


            // mcq_2 er jonno
            const folderPath2 = 'db/mcq/class9or10'
            const filePath2 = path.join(folderPath, 'class_9or10.json');
            const Question2 = await questionCollection2.getAllQuestions(filePath2)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question2 = Question2.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question2 = question2.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo


            //mcq 3 er jonno 
            const folderPath3 = 'db/mcq/class9or10'
            const filePath3 = path.join(folderPath, 'class_9or10.json');
            const Question3 = await questionCollection3.getAllQuestions(filePath3)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question3 = Question3.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question3 = question3.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo

            //mcq 4 er jonno 
            const folderPath4 = 'db/mcq/class9or10'
            const filePath4 = path.join(folderPath, 'class_9or10.json');
            const Question4 = await questionCollection4.getAllQuestions(filePath4)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question4 = Question4.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question4 = question4.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo


            // question k modify kore response korbo jeno ans na jai 
            const response = ''
            return res.status(200).json({ message: "Question Found", Question: response });

        }
        if (classes === '11' || classes === '12') {
            //mcq er jonoo
            const folderPath = 'db/mcq/class11or12'
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


            // mcq_2 er jonno
            const folderPath2 = 'db/mcq/class11or12'
            const filePath2 = path.join(folderPath, 'class_11or12.json');
            const Question2 = await questionCollection2.getAllQuestions(filePath2)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question2 = Question2.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question2 = question2.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo


            //mcq 3 er jonno 
            const folderPath3 = 'db/mcq/class11or12'
            const filePath3 = path.join(folderPath, 'class_11or12.json');
            const Question3 = await questionCollection3.getAllQuestions(filePath3)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question3 = Question3.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question3 = question3.filter((question) => question.chapter === chapter)
            }
            // random bave 11 ta question send korbo

            //mcq 4 er jonno 
            const folderPath4 = 'db/mcq/class11or12'
            const filePath4 = path.join(folderPath, 'class_11or12.json');
            const Question4 = await questionCollection4.getAllQuestions(filePath4)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            let question4 = Question4.filter((question) => question.bookName === bookName)
            if (chapter !== null) {
                question4 = question4.filter((question) => question.chapter === chapter)
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
module.exports = McqQuestionPaper;