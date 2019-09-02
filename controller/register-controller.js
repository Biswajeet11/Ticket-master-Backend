const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const _ = require('lodash')
const Users = require('../model/user')

router.get('/', (req, res) => {
	Users.find()
		.then((user) => {
			res.json(user)
		})
		.catch(err => console.log(err))
})

router.post('/', async (req, res) => {
	let userData = await Users.findOne({ email: req.body.email })

	if (userData) {
		console.log('user email ......... ', userData.email)
		res.status(404).send('user already registered')
	}

	else {
		const userValue = ['name', 'email', 'password']
		userData = new Users(_.pick(req.body, userValue))
		try {
			// const salt = await bcrypt.genSalt(10)
			// userData.password = await bcrypt.hash(userData.password, salt)
			await userData.save()
			res.json(userData)
		}
		catch (err) {
			res.send(err)
		}
	}

})

module.exports = { registerController: router }



// const token = await userData.generateToken()
// res.header('x-auth', token)
// res.send(token)