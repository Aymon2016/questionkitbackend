const validator = require('validator')

const validate = user => {
    let error = {}

    if (!user.name) {
        error.name = 'Please Provide Your Name'
    }

    if (!user.email) {
        error.email = 'Please Provide Your Email'
    } else if (!validator.isEmail(user.email)) {
        error.email = 'Please Provide a Valid Email'
    }
    if (!user.instituteName) {
        error.instituteName = 'Please Provide Your instituteName'
    }
    if (!user.ipAddress) {
        error.ipAddress = 'Please Provide Your ipAddress'
    }
    if (!user.service) {
        error.service = 'Please Provide Your service'
    }
    if (!user.status) {
        error.status = 'Please Provide Your status'
    }
    if (!user.role) {
        error.role = 'Please Provide Your role'
    }
    if (!user.timestamp) {
        error.timestamp = 'Please Provide Your timestamp'
    }
    if (!user.password) {
        error.password = 'Please Provide a Password'
    } else if (user.password.length < 8) {
        error.password = 'Password Must be Greater or Equal 8 Character'
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate