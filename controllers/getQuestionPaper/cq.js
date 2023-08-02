const path = require('path')
const fs = require('fs');
const { getRandomObjectsFromArray } = require('../../utilis/getdate')

const questionCollection = require('../../services/questionServices/cq/questionServices')
const CqQuestionPaper = async (req, res) => {

    const classes = req.query.classes
    const bookName = req.query.bookName
    const chapter = req.query.chapter || null


    try {
        if (classes === '6') {
            const folderPath = 'db/cq/class6'
            const filePath = path.join(folderPath, 'class_6.json');

            const QuestionAll = await questionCollection.getAllQuestions(filePath);

            // Filter questions based on bookName

            let questionBook = QuestionAll.filter((question) => question.bookName === bookName);

            if (chapter !== null) {
                // If chapter is provided, further filter questions based on chapter
                let questionFiltered = questionBook.filter((question) => question.chapter === chapter);
                questionBook = questionFiltered;
            }

            const question11 = await getRandomObjectsFromArray(questionBook, 11)

            return res.status(200).json({ message: "Questions Found", Question: question11 });

        }
        if (classes === '7') {
            const folderPath = 'db/cq/class7'
            const filePath = path.join(folderPath, 'class_7.json');

            const QuestionAll = await questionCollection.getAllQuestions(filePath);

            // Filter questions based on bookName

            let questionBook = QuestionAll.filter((question) => question.bookName === bookName);

            if (chapter !== null) {
                // If chapter is provided, further filter questions based on chapter
                let questionFiltered = questionBook.filter((question) => question.chapter === chapter);
                questionBook = questionFiltered;
            }

            const question11 = await getRandomObjectsFromArray(questionBook, 11)

            return res.status(200).json({ message: "Questions Found", Question: question11 });


        }
        if (classes === '8') {
            const folderPath = 'db/cq/class8'
            const filePath = path.join(folderPath, 'class_8.json');

            const QuestionAll = await questionCollection.getAllQuestions(filePath);

            // Filter questions based on bookName

            let questionBook = QuestionAll.filter((question) => question.bookName === bookName);

            if (chapter !== null) {
                // If chapter is provided, further filter questions based on chapter
                let questionFiltered = questionBook.filter((question) => question.chapter === chapter);
                questionBook = questionFiltered;
            }

            const question11 = await getRandomObjectsFromArray(questionBook, 11)

            return res.status(200).json({ message: "Questions Found", Question: question11 });
        }
        if (classes === '9' || classes === '10') {
            const folderPath = 'db/cq/class9or10'
            const filePath = path.join(folderPath, 'class_9or10.json');

            const QuestionAll = await questionCollection.getAllQuestions(filePath);

            // Filter questions based on bookName

            let questionBook = QuestionAll.filter((question) => question.bookName === bookName);

            if (chapter !== null) {
                // If chapter is provided, further filter questions based on chapter
                let questionFiltered = questionBook.filter((question) => question.chapter === chapter);
                questionBook = questionFiltered;
            }

            const question11 = await getRandomObjectsFromArray(questionBook, 11)

            return res.status(200).json({ message: "Questions Found", Question: question11 });

        }
        if (classes === '11' || classes === '12') {
            const folderPath = 'db/cq/class11or12';
            const filePath = path.join(folderPath, 'class_11or12.json');

            const QuestionAll = await questionCollection.getAllQuestions(filePath);


            // Filter questions based on bookName

            let questionBook = await QuestionAll.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                let questionFiltered = await questionBook.filter((question) => question.chapter === chapter);
                questionBook = questionFiltered;
            }


            const question11 = await getRandomObjectsFromArray(questionBook, 11)

            return res.status(200).json({ message: "Questions Found", Question: question11 });
        }

    } catch (error) {
        return res.status(500).json({ message: error });

    }



}
module.exports = CqQuestionPaper;