

const userCollection = require('../../services/userServices/userServices')

const GetOneUserController = async (req, res) => {

    const { id } = req.params;

    try {

        const user = await userCollection.findById(id)
        if (user.length !== 0) {
            return res.status(200).json({
                message: "User Found Successful!",
                user: user
            })
        } else {

            return res.status(404).json({ message: "User Not Found" });
        }

    } catch (error) {
        return res.status(500).json({ message: "Server Error" });

    }


};
module.exports = GetOneUserController