const Question = require('./questionConstructure')
const { readfile, writeFile } = require('../../utilis/utilis');

const questions = Symbol('questions');

class QuestionCollection {
    constructor() {
        this[questions] = [];
    }

    async create(serial, question, classes, bookName, chapter, type, answer, option_a, option_b, option_c, option_d, filePath) {

        const oneQuestion = new Question(serial, question, classes, bookName, chapter, type, answer, option_a, option_b, option_c, option_d);
        this[questions].push(oneQuestion);

        const existingData = await this.loadDataFromFile(filePath); // Read existing data from the file
        const updatedData = await existingData.concat(this[questions]); // Combine existing data with new question

        await this.writeDataToFile(filePath, updatedData); // Write updated data to the file

        return oneQuestion;
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
