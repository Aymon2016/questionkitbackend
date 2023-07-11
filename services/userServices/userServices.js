
const User = require('./userconstructor')



const { readfileUser, writeFileUser } = require('../../utilis/utilis')

const users = Symbol('users')

class UserCollection {

    constructor() {
        (async function () {
            const data = await readfileUser()
            this[users] = data;
        }.call(this))


    }
    /**
    * @param {string} name
     * @param {string} email
     * @param {string} instituteName 
     * @param {string} ipAddress 
     * @param {string} service
     * @param {string} status
     * @param {string} role 
     * @param {password} password
     */
    create(name, email, instituteName, ipAddress, service, status, role, password) {
        const user = new User(name, email, instituteName, ipAddress, service, status, role, password)
        this[users].push(user)
        writeFileUser(this[users])
        return user
    }

    async find() {
        return [...this[users]];
    }

    /**
     * find user by email
     * @param {string} email
     */
    async findByEmail(email) {


        const userEmail = this[users].filter(
            /**
             * @param {email} email
             */
            (user) => user.email === email
        )

        return userEmail;
    }
    /**
        * find user by id
        * @param {string} email
        */
    async findById(id) {


        const oneUser = this[users].filter(
            /**
             * @param {string} id
             */
            (user) => user.id === id
        )

        return oneUser;
    }
    async updateById(id, statuse) {
        const index = this[users].findIndex((user) => user.id === id);

        if (index === -1) {
            return null;
        }


        const userToUpdate = this[users][index];
        userToUpdate.status = statuse;

        writeFileUser(this[users]);

        return userToUpdate;
    }

    async updateUser(userId, updatedFields) {
        const index = this[users].findIndex(user => user.id === userId);
        if (index !== -1) {
            Object.keys(updatedFields).forEach(field => {
                if (this[users][index].hasOwnProperty(field)) {
                    this[users][index][field] = updatedFields[field];
                }
            });
            writeFileUser(this[users]);
            return true;
        }
        return false;
    }

    async deleteById(id) {

        const index = this[users].findIndex(
            /**
             * @param {user} user
             */
            (user) => user.id === id
        )
        if (index === -1) {
            return false;
        } else {
            this[users].splice(index, 1)
            writeFileUser(this[users])
            return true;
        }


    }

}

const userCollection = new UserCollection()
module.exports = userCollection