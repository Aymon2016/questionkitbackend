const shortid = require('shortid')

class QuestionCQ {

    /**
     * Users constructor will receive serial, oddipok, classes, bookName, chapter, type, question_a, question_b, question_c, question_d, answer_a, answer_b, answer_c, answer_d
     * @param {string} serial
     * @param {string} oddipok
     * @param {string} classes
     * @param {string} bookName 
     * @param {string} chapter
     * @param {string} type
     * @param {string} question_a
     * @param {string} question_b
     * @param {string} question_c
     * @param {string} question_d
     * @param {string} answer_a
     *  * @param {string} answer_b
     *  * @param {string} answer_c
     *  * @param {string} answer_d
     * 
     */

    constructor(serial, oddipok, classes, bookName, chapter, type, question_a, question_b, question_c, question_d, answer_a, answer_b, answer_c, answer_d) {
        this.id = shortid.generate()
        this.serial = serial;
        this.question = oddipok;
        this.classes = classes;
        this.bookName = bookName;
        this.chapter = chapter;
        this.type = type;
        this.question_a = question_a;
        this.question_b = question_b;
        this.question_c = question_c;
        this.question_d = question_d;
        this.answer_a = answer_a;
        this.answer_b = answer_b;
        this.answer_c = answer_c;
        this.answer_d = answer_d
    }
}

module.exports = QuestionCQ;