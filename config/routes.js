const express = require('express')
const router = express.Router()
const customerRouter = require("../routers/customer.router");

const { homeController } = require('../controller/home-controller')
const { departmentController } = require('../controller/department-controller')
const { employeeController } = require('../controller/employee-controller')
const { registerController } = require('../controller/register-controller')
const { loginController } = require('../controller/login-controller')

router.use('/', homeController)
router.use('/customers', customerRouter)
router.use('/departments', departmentController)
router.use('/employees', employeeController)
router.use('/register', registerController)
router.use('/login', loginController)

module.exports = {
	routes: router
}