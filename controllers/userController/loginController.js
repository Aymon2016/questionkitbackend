const loginvalidator = require('../../validator/userValidator/loginValidator')
const userCollection = require('../../services/userServices/userServices')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



const loginController = async (req, res) => {

    const secretKey = process.env.SECRET_KEY;

    let { email, password } = JSON.parse(req.body.body)

    let validate = loginvalidator({ email, password })
    if (!validate.isValid) {
        return res.status(400).json(validate.error)
    } else {

        try {

            const user = await userCollection.findByEmail(email)
            if (user.length === 0) {
                return res.status(401).json({ message: 'User Not Found' })
            } else {
                const getuser = user[0]
                bcrypt.compare(password, getuser.password, (err, result) => {
                    if (err) {
                        return res.status(500).json({ message: 'Server Error' })
                    }
                    if (!result) {
                        return res.status(500).json({ message: 'Password Doesn\'t Match' })
                    }

                    let token = jwt.sign({
                        id: getuser.id,
                        name: getuser.name,
                        email: getuser.email,
                        instituteName: getuser.instituteName,
                        service: getuser.service,
                        status: getuser.status,
                        role: getuser.role,
                        ipAddress: getuser.ipAddress,
                        timestamp: getuser.timestamp

                    }, secretKey, { expiresIn: '2h' })


                    res.status(200).cookie('token', token, {
                        httpOnly: true,
                        maxAge: 3600000, // 
                        secure: true, // 
                    }).json({
                        message: 'Login Successful',
                        user: JSON.stringify({
                            id: getuser.id,
                            name: getuser.name,
                            email: getuser.email,
                            instituteName: getuser.instituteName,
                            service: getuser.service,
                            status: getuser.status,
                            role: getuser.role,
                            ipAddress: getuser.ipAddress,
                            timestamp: getuser.timestamp
                        }),
                        token: `Bearer ${token}`
                    })

                })
            }


        } catch (err) {

            res.status(500).json({ message: 'server error' })
        }
    }


    /*=====  End of Bussiness logic  ======*/




    /*=============================================
    =            Error handling            =
    =============================================*/



    /*=====  End of Error handling  ======*/




    /*=============================================
    =            response generate            =
    =============================================*/



    /*=====  End of response generate  ======*/



};
module.exports = loginController