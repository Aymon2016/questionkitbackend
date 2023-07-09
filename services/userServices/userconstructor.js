const shortId = require('shortid')


class Users {

    /**
     * Users constructor will receive name, email, instituteName, ipAddress, service, status, role, password
     * @param {string} name
     * @param {string} email
     * @param {string} instituteName 
     * @param {string} ipAddress 
     * @param {string} service
     * @param {string} status
     * @param {string} role 
     * @param {password} password
     * @param { string} timestamp
     */

    constructor(name, email, instituteName, ipAddress, service, status, role, password, timestamp) {
        this.id = shortId.generate()
        this.name = name;
        this.email = email;
        this.instituteName = instituteName;
        this.ipAddress = ipAddress;
        this.service = service;
        this.status = status;
        this.role = role;
        this.password = password;
        this.timestamp = timestamp

    }
}

module.exports = Users;