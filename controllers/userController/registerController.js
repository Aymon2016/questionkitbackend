
const registerValidator = require('../../validator/userValidator/registerValidator')
const userCollection = require('../../services/userServices/userServices')
const bcrypt = require('bcrypt')
const { getFullDate } = require('../../utilis/getdate')

const registerController = async (req, res) => {

    let { name, email, instituteName, ipAddress, service, status, role, password } = JSON.parse(req.body.body)
    // let { name, email, instituteName, ipAddress, service, status, role, password } = req.body
    const timestamp = await getFullDate();

    let validate = registerValidator({ name, email, instituteName, ipAddress, service, status, role, password, timestamp })


    if (!validate.isValid) {
        return res.status(400).json(validate.error)
    } else {
        try {


            const user = await userCollection.findByEmail(email)

            if (user.length !== 0) {
                return res.status(400).json({ message: 'Email Already Exist' })

            } else {

                bcrypt.hash(password, 11, (err, hash) => {
                    if (err) {
                        return resourceError(res, 'Server Error Occurred')
                    } else {

                        const newUser = userCollection.create(name, email, instituteName, ipAddress, service, status, role, password = hash, timestamp)

                        return res.status(200).json({
                            message: 'user created successfully',
                            user: JSON.stringify(newUser)
                        })
                    }

                })
            }

        } catch (error) {
            return res.status(500).json({ message: 'something went wrong', error: error })
        }
    }

};
module.exports = registerController



