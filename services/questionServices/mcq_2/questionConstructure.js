const shortid = require('shortid')

class Question {

    /**
     * Users constructor will receive serial, classes, bookName, chapter, type, question, question_i, question_ii, question_iii, option_a, option_b, option_c, option_d, answer
     * @param {string} serial
     * @param {string} classes
     * @param {string} bookName 
     * @param {string} chapter
     * @param {string} type
     * @param {string} question
     * @param {string} question_i
     * @param {string} question_ii
     * @param {string} question_iii
     * @param {string} answer
     * @param {string} option_a
     * @param {string} option_b
     * @param {string} option_c
     * @param {string} option_d
     */

    constructor(serial, classes, bookName, chapter, type, question, question_i, question_ii, question_iii, option_a, option_b, option_c, option_d, answer) {
        this.id = shortid.generate()
        this.serial = serial;
        this.classes = classes;
        this.bookName = bookName;
        this.chapter = chapter;
        this.type = type;
        this.question = question;
        this.question_i = question_i;
        this.question_ii = question_ii;
        this.question_iii = question_iii;
        this.answer = answer;
        this.option_a = option_a;
        this.option_b = option_b;
        this.option_c = option_c;
        this.option_d = option_d;
        this.answer = answer
    }
}

module.exports = Question;