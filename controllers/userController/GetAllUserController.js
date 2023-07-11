

const userCollection = require('../../services/userServices/userServices')

const GetAllUserController = async (req, res) => {

    try {

        const user = await userCollection.find()
        if (user.length === 0) {
            return res.status(404).json({ message: "User Not Found" });
        }
        /// baki sorting all filter add this 
        return res.status(200).json({ message: "User Found", user: user });

    } catch (error) {
        return res.status(500).json({ message: "Server Error" });

    }


};
module.exports = GetAllUserController