const shortid = require('shortid')

class Question {

    /**
     * Users constructor will receive serial,question,classes,bookName,chapter,type,answer,option_a,option_b,option_c,option_d
     * @param {string} serial
     * @param {string} classes
     * @param {string} bookName 
     * @param {string} chapter
     * @param {string} type
     * @param {string} oddipok
     * @param {string} question
     * @param {string} option_a
     * @param {string} option_b
     * @param {string} option_c
     * @param {string} option_d
     * @param {string} answer
     */

    constructor(serial, classes, bookName, chapter, type, oddipok, question, option_a, option_b, option_c, option_d, answer) {
        this.id = shortid.generate()
        this.serial = serial;
        this.classes = classes;
        this.bookName = bookName;
        this.chapter = chapter;
        this.type = type;
        this.oddipok = oddipok;
        this.question = question;
        this.option_a = option_a;
        this.option_b = option_b;
        this.option_c = option_c;
        this.option_d = option_d;
        this.answer = answer;
    }
}

module.exports = Question;