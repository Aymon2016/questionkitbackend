const validator = require('validator')

const validate = question => {

    let error = {}

    if (!question.serial) {
        error.serial = 'Please Provide Question Serial'
    }

    if (!question.question) {
        error.question = 'Please Provide Your Question'
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

    if (!question.answer) {
        error.answer = 'Please Provide Question Answer'
    }
    if (!question.option_a) {
        error.option_a = 'Please Provide Option_a'
    }

    if (!question.option_b) {
        error.option_b = 'Please Provide Option_b'
    }
    if (!question.option_c) {
        error.option_c = 'Please Provide Option_c'
    }

    if (!question.option_d) {
        error.option_d = 'Please Provide Option_d'
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate