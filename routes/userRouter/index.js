const express = require("express");
const LoginController = require("../../controllers/userController/loginController");
const RegisterContoller = require('../../controllers/userController/registerController')
const BlockController = require('../../controllers/userController/blockController');
const DeleteController = require('../../controllers/userController/DeleteController');
const UpdateController = require('../../controllers/userController/UpdateController');
const GetOneUserController = require('../../controllers/userController/GetOneUserController');
const GetAllUserController = require('../../controllers/userController/GetAllUserController');

const router = express.Router();

router.get('/users', GetAllUserController)
router.get('/users/:id', GetOneUserController)
router.post('/users/login', LoginController)
router.post('/users/register', RegisterContoller)
router.patch('/users/block/:id', BlockController)
router.delete('/users/:id', DeleteController)
router.patch('/users/:id', UpdateController)




module.exports = router;