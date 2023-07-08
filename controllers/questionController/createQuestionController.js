
const createQuestionValidator = require('../../validator/questionValidator/createQuestionValidator')

const questionCollection = require('../../services/questionServices/questionServices')
const path = require('path')
const fs = require('fs');


const createQuestionController = async (req, res) => {


    let { serial, question, classes, bookName, chapter, type, answer, option_a, option_b, option_c, option_d } = JSON.parse(req.body.body)


    let validate = createQuestionValidator({ serial, question, classes, bookName, chapter, type, answer, option_a, option_b, option_c, option_d })


    if (!validate.isValid) {
        return res.status(400).json({
            message: "Bad Request",
            Error: validate.error
        })
    } else {


        try {


            if (classes === '6') {

                const folderPath = 'db/class6'
                const filePath = path.join(folderPath, 'class_6.json');

                if (!fs.existsSync(folderPath)) {
                    fs.mkdirSync(folderPath, { recursive: true })
                }
                if (!fs.existsSync(filePath)) {
                    fs.writeFileSync(filePath, JSON.stringify([]))
                }
                const questions = await questionCollection.create(serial, question, classes, bookName, chapter, type, answer, option_a, option_b, option_c, option_d, filePath)
                return res.status(200).json({ questions })



            }
            if (classes === '7') {
                const folderPath = 'db/class7'
                const filePath = path.join(folderPath, 'class_7.json');

                if (!fs.existsSync(folderPath)) {
                    fs.mkdirSync(folderPath, { recursive: true })
                }
                if (!fs.existsSync(filePath)) {
                    fs.writeFileSync(filePath, JSON.stringify([]))
                }
                const questions = await questionCollection.create(serial, question, classes, bookName, chapter, type, answer, option_a, option_b, option_c, option_d, filePath)
                return res.status(200).json({ questions })
            }
            if (classes === '8') {
                const folderPath = 'db/class8'
                const filePath = path.join(folderPath, 'class_8.json');

                if (!fs.existsSync(folderPath)) {
                    fs.mkdirSync(folderPath, { recursive: true })
                }
                if (!fs.existsSync(filePath)) {
                    fs.writeFileSync(filePath, JSON.stringify([]))
                }
                const questions = await questionCollection.create(serial, question, classes, bookName, chapter, type, answer, option_a, option_b, option_c, option_d, filePath)
                return res.status(200).json({ questions })
            }
            if (classes === '9' || classes === '10') {
                const folderPath = 'db/class9or10'
                const filePath = path.join(folderPath, 'class_9or10.json');

                if (!fs.existsSync(folderPath)) {
                    fs.mkdirSync(folderPath, { recursive: true })
                }
                if (!fs.existsSync(filePath)) {
                    fs.writeFileSync(filePath, JSON.stringify([]))
                }
                const questions = await questionCollection.create(serial, question, classes, bookName, chapter, type, answer, option_a, option_b, option_c, option_d, filePath)
                return res.status(200).json({ questions })
            }
            if (classes === '11' || classes === '12') {
                const folderPath = 'db/class11or12'
                const filePath = path.join(folderPath, 'class_11or12.json');

                if (!fs.existsSync(folderPath)) {
                    fs.mkdirSync(folderPath, { recursive: true })
                }
                if (!fs.existsSync(filePath)) {
                    fs.writeFileSync(filePath, JSON.stringify([]))
                }
                const questions = await questionCollection.create(serial, question, classes, bookName, chapter, type, answer, option_a, option_b, option_c, option_d, filePath)
                return res.status(200).json({ questions })
            }

        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error', Error: error })
        }

    }

};
module.exports = createQuestionController