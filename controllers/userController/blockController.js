
const userCollection = require('../../services/userServices/userServices')

const BlockController = async (req, res) => {

    const { id } = req.params;
    try {

        const user = await userCollection.findById(id);

        // if (user.length !== 0) {
        if (user[0].status === 'block') {

            const user = await userCollection.updateById(id, statuse = 'unblock');
            return res.status(200).json({ message: "You have been unblocked", user: user });
        } else if (user[0].status === 'unblock') {
            const user = await userCollection.updateById(id, statuse = 'block');
            return res.status(200).json({ message: "You have been blocked", user: user });
        } else {
            return res.status(400).json({ message: 'Users Not Found' })
        }

        // }
        // return res.status(400).json({ message: 'Users Not Found' })


    } catch (error) {
        return res.status(500).json({ message: "Server Error" });

    }


};
module.exports = BlockController