

const userCollection = require('../../services/userServices/userServices')

const DeleteController = async (req, res) => {

    const { id } = req.params;
    try {

        const user = await userCollection.findById(id);

        if (user.length === 0) {
            return res.status(400).json({ message: 'Users Not Found' })
        }
        const deleteUser = await userCollection.deleteById(id);

        if (deleteUser === true) {
            return res.status(200).json({ message: "Deleted successfull" });
        }
        return res.status(500).json({ message: "Internal Server Error" });

    } catch (error) {
        return res.status(500).json({ message: "Server Error" });

    }


};
module.exports = DeleteController