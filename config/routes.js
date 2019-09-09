const express = require('express')
const router = express.Router()

const customerRouter = require("../routers/customer.router");
const homeRouter = require('../routers/home.router')
const departmentRouter = require('../routers/department.router')
const employeeRouter = require('../routers/employee.router')
const ticketRouter = require('../routers/ticket.router')



const { registerController } = require('../controller/register-controller')
const { loginController } = require('../controller/login-controller')

router.use('/', homeRouter)
router.use('/customers', customerRouter)
router.use('/departments', departmentRouter)
router.use('/employees', employeeRouter)
router.use('/tickets', ticketRouter)

router.use('/register', registerController)
router.use('/login', loginController)

module.exports = {
	routes: router
}