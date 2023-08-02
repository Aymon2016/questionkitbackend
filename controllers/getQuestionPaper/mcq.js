const path = require('path')
const fs = require('fs');
const { getRandomObjectsFromArray } = require('../../utilis/getdate')
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


            let mcq = await questionCollection.getAllQuestions(filePath)


            mcq = await mcq.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq.filter((question) => question.chapter === chapter);
                mcq = mcqfiltered;
            }

            const mcq15 = await getRandomObjectsFromArray(mcq, 15)

            // mcq_2 er jonno
            const folderPath2 = 'db/mcq_2/class6'
            const filePath2 = path.join(folderPath, 'class_6.json');

            let mcq_2 = await questionCollection2.getAllQuestions(filePath)


            mcq_2 = await mcq_2.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq_2.filter((question) => question.chapter === chapter);
                mcq_2 = mcqfiltered;
            }

            const mcq_2_5 = await getRandomObjectsFromArray(mcq_2, 5)


            //mcq 3 er jonno 
            const folderPath3 = 'db/mcq_3/class6'
            const filePath3 = path.join(folderPath, 'class_6.json');

            let mcq_3 = await questionCollection3.getAllQuestions(filePath)


            mcq_3 = await mcq_3.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq_3.filter((question) => question.chapter === chapter);
                mcq_3 = mcqfiltered;
            }

            const mcq_3_5 = await getRandomObjectsFromArray(mcq_3, 5)

            //mcq 4 er jonno 
            const folderPath4 = 'db/mcq/class6'
            const filePath4 = path.join(folderPath, 'class_6.json');

            let mcq_4 = await questionCollection4.getAllQuestions(filePath)


            mcq_4 = await mcq_4.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq_4.filter((question) => question.chapter === chapter);
                mcq_4 = mcqfiltered;
            }

            const mcq_4_5 = await getRandomObjectsFromArray(mcq_4, 5)


            const response = {
                mcq: mcq15,
                mcq_2: mcq_2_5,
                mcq_3: mcq_3_5,
                mcq_4: mcq_4_5
            }

            return res.status(200).json({ message: "Question Found", Question: response });

        }
        if (classes === '7') {

            // mcq er jonoo
            const folderPath = 'db/mcq/class7'
            const filePath = path.join(folderPath, 'class_7.json');


            let mcq = await questionCollection.getAllQuestions(filePath)


            mcq = await mcq.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq.filter((question) => question.chapter === chapter);
                mcq = mcqfiltered;
            }

            const mcq15 = await getRandomObjectsFromArray(mcq, 15)

            // mcq_2 er jonno
            const folderPath2 = 'db/mcq_2/class7'
            const filePath2 = path.join(folderPath, 'class_7.json');

            let mcq_2 = await questionCollection2.getAllQuestions(filePath)


            mcq_2 = await mcq_2.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq_2.filter((question) => question.chapter === chapter);
                mcq_2 = mcqfiltered;
            }

            const mcq_2_5 = await getRandomObjectsFromArray(mcq_2, 5)


            //mcq 3 er jonno 
            const folderPath3 = 'db/mcq_3/class7'
            const filePath3 = path.join(folderPath, 'class_7.json');

            let mcq_3 = await questionCollection3.getAllQuestions(filePath)


            mcq_3 = await mcq_3.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq_3.filter((question) => question.chapter === chapter);
                mcq_3 = mcqfiltered;
            }

            const mcq_3_5 = await getRandomObjectsFromArray(mcq_3, 5)

            //mcq 4 er jonno 
            const folderPath4 = 'db/mcq/class7'
            const filePath4 = path.join(folderPath, 'class_7.json');

            let mcq_4 = await questionCollection4.getAllQuestions(filePath)


            mcq_4 = await mcq_4.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq_4.filter((question) => question.chapter === chapter);
                mcq_4 = mcqfiltered;
            }

            const mcq_4_5 = await getRandomObjectsFromArray(mcq_4, 5)


            const response = {
                mcq: mcq15,
                mcq_2: mcq_2_5,
                mcq_3: mcq_3_5,
                mcq_4: mcq_4_5
            }

            return res.status(200).json({ message: "Question Found", Question: response });

        }
        if (classes === '8') {
            //  mcq er jonoo
            const folderPath = 'db/mcq/class8'
            const filePath = path.join(folderPath, 'class_8.json');


            let mcq = await questionCollection.getAllQuestions(filePath)


            mcq = await mcq.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq.filter((question) => question.chapter === chapter);
                mcq = mcqfiltered;
            }

            const mcq15 = await getRandomObjectsFromArray(mcq, 15)

            // mcq_2 er jonno
            const folderPath2 = 'db/mcq_2/class8'
            const filePath2 = path.join(folderPath, 'class_8.json');

            let mcq_2 = await questionCollection2.getAllQuestions(filePath)


            mcq_2 = await mcq_2.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq_2.filter((question) => question.chapter === chapter);
                mcq_2 = mcqfiltered;
            }

            const mcq_2_5 = await getRandomObjectsFromArray(mcq_2, 5)


            //mcq 3 er jonno 
            const folderPath3 = 'db/mcq_3/class8'
            const filePath3 = path.join(folderPath, 'class_8.json');

            let mcq_3 = await questionCollection3.getAllQuestions(filePath)


            mcq_3 = await mcq_3.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq_3.filter((question) => question.chapter === chapter);
                mcq_3 = mcqfiltered;
            }

            const mcq_3_5 = await getRandomObjectsFromArray(mcq_3, 5)

            //mcq 4 er jonno 
            const folderPath4 = 'db/mcq/class8'
            const filePath4 = path.join(folderPath, 'class_8.json');

            let mcq_4 = await questionCollection4.getAllQuestions(filePath)


            mcq_4 = await mcq_4.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq_4.filter((question) => question.chapter === chapter);
                mcq_4 = mcqfiltered;
            }

            const mcq_4_5 = await getRandomObjectsFromArray(mcq_4, 5)


            const response = {
                mcq: mcq15,
                mcq_2: mcq_2_5,
                mcq_3: mcq_3_5,
                mcq_4: mcq_4_5
            }

            return res.status(200).json({ message: "Question Found", Question: response });

        }
        if (classes === '9' || classes === '10') {
            //mcq er jonoo
            const folderPath = 'db/mcq/class9or10'
            const filePath = path.join(folderPath, 'class_9or10.json');


            let mcq = await questionCollection.getAllQuestions(filePath)


            mcq = await mcq.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq.filter((question) => question.chapter === chapter);
                mcq = mcqfiltered;
            }

            const mcq15 = await getRandomObjectsFromArray(mcq, 15)


            // mcq_2 er jonno
            const folderPath2 = 'db/mcq/class9or10'
            const filePath2 = path.join(folderPath2, 'class_9or10.json');

            let mcq_2 = await questionCollection2.getAllQuestions(filePath2)


            mcq_2 = await mcq_2.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq_2.filter((question) => question.chapter === chapter);
                mcq_2 = mcqfiltered;
            }

            const mcq_2_5 = await getRandomObjectsFromArray(mcq_2, 5)


            //mcq 3 er jonno 
            const folderPath3 = 'db/mcq/class9or10'
            const filePath3 = path.join(folderPath3, 'class_9or10.json');

            let mcq_3 = await questionCollection3.getAllQuestions(filePath3)


            mcq_3 = await mcq_3.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq_3.filter((question) => question.chapter === chapter);
                mcq_3 = mcqfiltered;
            }

            const mcq_3_5 = await getRandomObjectsFromArray(mcq_3, 5)


            //mcq 4 er jonno 
            const folderPath4 = 'db/mcq/class9or10'
            const filePath4 = path.join(folderPath4, 'class_9or10.json');

            let mcq_4 = await questionCollection3.getAllQuestions(filePath4)


            mcq_4 = await mcq_4.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq_4.filter((question) => question.chapter === chapter);
                mcq_4 = mcqfiltered;
            }

            const mcq_4_5 = await getRandomObjectsFromArray(mcq_4, 5)


            const response = {
                mcq: mcq15,
                mcq_2: mcq_2_5,
                mcq_3: mcq_3_5,
                mcq_4: mcq_4_5
            }

            return res.status(200).json({ message: "Question Found", Question: response });


        }
        if (classes === '11' || classes === '12') {
            //mcq er jonoo
            const folderPath = 'db/mcq/class11or12'
            const filePath = path.join(folderPath, 'class_11or12.json');


            let mcq = await questionCollection.getAllQuestions(filePath)


            mcq = await mcq.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq.filter((question) => question.chapter === chapter);
                mcq = mcqfiltered;
            }

            const mcq15 = await getRandomObjectsFromArray(mcq, 15)


            // mcq_2 er jonno
            const folderPath2 = 'db/mcq/class11or12'
            const filePath2 = path.join(folderPath2, 'class_11or12.json');

            let mcq_2 = await questionCollection2.getAllQuestions(filePath2)


            mcq_2 = await mcq_2.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq_2.filter((question) => question.chapter === chapter);
                mcq_2 = mcqfiltered;
            }

            const mcq_2_5 = await getRandomObjectsFromArray(mcq_2, 5)


            //mcq 3 er jonno 
            const folderPath3 = 'db/mcq/class11or12'
            const filePath3 = path.join(folderPath3, 'class_11or12.json');

            let mcq_3 = await questionCollection3.getAllQuestions(filePath3)


            mcq_3 = await mcq_3.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq_3.filter((question) => question.chapter === chapter);
                mcq_3 = mcqfiltered;
            }

            const mcq_3_5 = await getRandomObjectsFromArray(mcq_3, 5)


            //mcq 4 er jonno 
            const folderPath4 = 'db/mcq/class11or12'
            const filePath4 = path.join(folderPath4, 'class_11or12.json')

            let mcq_4 = await questionCollection3.getAllQuestions(filePath4)


            mcq_4 = await mcq_4.filter((question) => question.bookName === bookName);

            if (chapter !== 'null') {
                // If chapter is provided, further filter questions based on chapter
                mcqfiltered = await mcq_4.filter((question) => question.chapter === chapter);
                mcq_4 = mcqfiltered;
            }

            const mcq_4_5 = await getRandomObjectsFromArray(mcq_4, 5)


            const response = {
                mcq: mcq15,
                mcq_2: mcq_2_5,
                mcq_3: mcq_3_5,
                mcq_4: mcq_4_5
            }

            return res.status(200).json({ message: "Question Found", Question: response });

        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });

    }

}
module.exports = McqQuestionPaper;