const express = require("express");
const LoginController = require("../../controllers/userController/loginController");
const RegisterContoller = require('../../controllers/userController/registerController')
const BlockController = require('../../controllers/userController/blockController');
const DeleteController = require('../../controllers/userController/DeleteController')

const router = express.Router();


router.post('/users/login', LoginController)
router.post('/users/register', RegisterContoller)
router.patch('/users/block/:id', BlockController)
router.delete('/users/:id', DeleteController)



module.exports = router;