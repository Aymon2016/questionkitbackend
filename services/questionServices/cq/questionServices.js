const QuestionCQ = require('./questionConstructure')
const { readfile, writeFile } = require('../../../utilis/utilis');

const questions = Symbol('questions');

class QuestionCollection {
    constructor() {
        this[questions] = [];
    }

    async create(serial, oddipok, classes, bookName, chapter, type, question_a, question_b, question_c, question_d, answer_a, answer_b, answer_c, answer_d, filePath) {

        const oneQuestion = new QuestionCQ(serial, oddipok, classes, bookName, chapter, type, question_a, question_b, question_c, question_d, answer_a, answer_b, answer_c, answer_d);

        this[questions].push(oneQuestion);

        const existingData = await this.loadDataFromFile(filePath); // Read existing data from the file
        const updatedData = await existingData.concat(this[questions]); // Combine existing data with new question

        await this.writeDataToFile(filePath, updatedData); // Write updated data to the file

        return oneQuestion;
    }

    async getAllQuestions(filePath) {
        const data = await this.loadDataFromFile(filePath);
        return data;
    }

    async findOneQuestion(Id, filePath) {
        const data = await this.loadDataFromFile(filePath);

        const foundQuestion = data.find(question => question.id === Id);

        return foundQuestion;
    }

    async deleteQuestion(questionId, filePath) {
        const data = await this.loadDataFromFile(filePath);
        const index = data.findIndex(
            (user) => user.id === questionId
        )
        if (index === -1) {
            return false;
        } else {
            data.splice(index, 1)
            await this.writeDataToFile(filePath, data);
            return true;
        }
    }

    async writeDataToFile(filePath, data) {
        try {
            await writeFile(filePath, data);

        } catch (error) {
            console.error('Error writing data to file:', error);
        }
    }

    async loadDataFromFile(filePath) {
        try {
            const data = await readfile(filePath);

            return data;
        } catch (error) {

            return [];
        }
    }
}

const questionCollection = new QuestionCollection();
module.exports = questionCollection;
