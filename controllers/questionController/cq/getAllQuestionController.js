
const questionCollection = require('../../../services/questionServices/cq/questionServices')
const path = require('path')
const fs = require('fs');

const getAllQuestionController = async (req, res) => {

    const { classes } = req.params;
    try {
        if (classes === '6') {
            const folderPath = 'db/cq/class6'
            const filePath = path.join(folderPath, 'class_6.json');
            const Question = await questionCollection.getAllQuestions(filePath)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            return res.status(200).json({ message: "Question Found", Question: Question });
        }
        if (classes === '7') {
            const folderPath = 'db/cq/class7'
            const filePath = path.join(folderPath, 'class_7.json');
            const Question = await questionCollection.getAllQuestions(filePath)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            return res.status(200).json({ message: "Question Found", Question: Question });


        }
        if (classes === '8') {
            const folderPath = 'db/cq/class8'
            const filePath = path.join(folderPath, 'class_8.json');
            const Question = await questionCollection.getAllQuestions(filePath)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            return res.status(200).json({ message: "Question Found", Question: Question });


        }
        if (classes === '9' || classes === '10') {
            const folderPath = 'db/cq/class9or10'
            const filePath = path.join(folderPath, 'class_9or10.json');

            const Question = await questionCollection.getAllQuestions(filePath)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            return res.status(200).json({ message: "Question Found", Question: Question });


        }
        if (classes === '1' || classes === '12') {
            const folderPath = 'db/cq/class11or12'
            const filePath = path.join(folderPath, 'class_11or12.json');

            const Question = await questionCollection.getAllQuestions(filePath)
            if (Question.length === 0) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            return res.status(200).json({ message: "Question Found", Question: Question });


        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });

    }

};
module.exports = getAllQuestionController