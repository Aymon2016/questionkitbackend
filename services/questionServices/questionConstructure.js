

class Question {

    /**
     * Users constructor will receive serial,question,classes,bookName,chapter,type,answer,option_a,option_b,option_c,option_d
     * @param {string} serial
     * @param {string} question
     * @param {string} classes
     * @param {string} bookName 
     * @param {string} chapter
     * @param {string} type
     * @param {string} answer
     * @param {string} option_a
     * @param {string} option_b
     * @param {string} option_c
     * @param {string} option_d
     */

    constructor(serial, question, classes, bookName, chapter, type, answer, option_a, option_b, option_c, option_d) {
        this.serial = serial;
        this.question = question;
        this.classes = classes;
        this.bookName = bookName;
        this.chapter = chapter;
        this.type = type;
        this.answer = answer;
        this.option_a = option_a;
        this.option_b = option_b;
        this.option_c = option_c;
        this.option_d = option_d;
    }
}

module.exports = Question;