const validator = require('validator')

const validate = question => {

    let error = {}

    if (!question.serial) {
        error.serial = 'Please Provide Question Serial'
    }

    if (!question.oddipok) {
        error.oddipok = 'Please Provide Your oddipok'
    }

    if (!question.classes) {
        error.classes = 'Please Provide Question Class'
    }

    if (!question.bookName) {
        error.bookName = 'Please Provide Book Name'
    }

    if (!question.chapter) {
        error.chapter = 'Please Provide Chapter'
    }
    if (!question.type) {
        error.type = 'Please Provide Question type'
    }

    if (!question.question_a) {
        error.question_a = 'Please Provide  question_a'
    }
    if (!question.question_b) {
        error.question_b = 'Please Provide  question_b'
    }
    if (!question.question_c) {
        error.question_c = 'Please Provide  question_c'
    }
    if (!question.question_d) {
        error.question_d = 'Please Provide question_d'
    }

    if (!question.answer_a) {
        error.answer_a = 'Please Provide answer_a'
    }
    if (!question.answer_b) {
        error.answer_b = 'Please Provide answer_b'
    }

    if (!question.answer_c) {
        error.answer_c = 'Please Provide answer_c'
    }
    if (!question.answer_d) {
        error.answer_d = 'Please Provide answer_d'
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate