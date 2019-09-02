const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const _ = require('lodash')
const Users = require('../model/user')


router.post('/', async (req, res) => {

	let userData = await Users.findOne({ email: req.body.email })
	if (userData) {
		res.status(404).send('user not registered')
	}

	else {
		const userValue = ['email', 'password']

		userData = new Users(_.pick(req.body, userValue))

		console.log('The userdata is .....', userData)
		const salt = await bcrypt.genSalt(10)
		userData.password = await bcrypt.hash(userData.password, salt)

		await userData.save()
		console.log(userData)

		const token = await userData.generateToken()

		res.header('x-auth', token)
		res.send(token)

	}
})

module.exports = { loginController: router }