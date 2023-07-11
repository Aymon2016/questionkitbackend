

const userCollection = require('../../services/userServices/userServices')

const UpdateController = async (req, res) => {

    const { id } = req.params;
    const updatedFields = req.body;

    try {

        if (Object.keys(updatedFields).length > 0) {
            const updateUser = await userCollection.updateUser(id, updatedFields)
            if (updateUser === true) {
                return res.status(200).json({ message: "User updated successfully!" });

            } else {
                return res.status(404).json({ message: "User Not Found!" });
            }
        } else {
            return res.status(500).json({ message: "Internal Server Error" });
        }


    } catch (error) {
        return res.status(500).json({ message: "Server Error" });

    }


};
module.exports = UpdateController