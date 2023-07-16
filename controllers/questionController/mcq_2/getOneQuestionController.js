
const questionCollection = require('../../../services/questionServices/mcq/questionServices')
const path = require('path')
const fs = require('fs');

const getOneQuestionController = async (req, res) => {

    const { classes, id } = req.params;
    try {
        if (classes === '6') {
            const folderPath = 'db/mcq/class6'
            const filePath = path.join(folderPath, 'class_6.json');
            const Question = await questionCollection.findOneQuestion(id, filePath)
            if (Question === undefined) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            return res.status(200).json({ message: "Question Found", Question: Question });
        }
        if (classes === '7') {
            const folderPath = 'db/mcq/class7'
            const filePath = path.join(folderPath, 'class_7.json');
            const Question = await questionCollection.findOneQuestion(id, filePath)
            if (Question === undefined) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            return res.status(200).json({ message: "Question Found", Question: Question });


        }
        if (classes === '8') {
            const folderPath = 'db/mcq/class8'
            const filePath = path.join(folderPath, 'class_8.json');
            const Question = await questionCollection.findOneQuestion(id, filePath)
            if (Question === undefined) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            return res.status(200).json({ message: "Question Found", Question: Question });


        }
        if (classes === '9' || classes === '10') {
            const folderPath = 'db/mcq/class9or10'
            const filePath = path.join(folderPath, 'class_9or10.json');

            const Question = await questionCollection.findOneQuestion(id, filePath)
            if (Question === undefined) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            return res.status(200).json({ message: "Question Found", Question: Question });


        }
        if (classes === '11' || classes === '12') {
            const folderPath = 'db/mcq/class11or12'
            const filePath = path.join(folderPath, 'class_11or12.json');
            console.log(classes, id)
            const Question = await questionCollection.findOneQuestion(id, filePath)
            if (Question === undefined) {
                return res.status(404).json({ message: "Question Not Found" });
            }
            /// baki sorting all filter add this 
            return res.status(200).json({ message: "Question Found", Question: Question });


        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });

    }

};
module.exports = getOneQuestionController 