const express = require("express");
const LoginController = require("../../controllers/userController/loginController");
const RegisterContoller = require('../../controllers/userController/registerController')
const LogoutController = require('../../controllers/userController/logoutController')
const userInfo = require('../../controllers/userController/userInfo')
const router = express.Router();


router.post('/users/login', LoginController)
router.post('/users/register', RegisterContoller)
router.get('/users/logout', LogoutController)
router.get('/users/info/:userID', userInfo)


module.exports = router;