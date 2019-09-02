const express = require('express')
const router = express.Router()
const Departments = require('../model/departments')

router.get('/', (req, res) => {
	Departments.find()
		.then((department) => {
			res.json(department)
		})
		.catch(err => console.log(err))
})

router.post('/', async (req, res) => {
	
	let departmentData = new Departments({
		name: req.body.name
	})
	try {
		await departmentData.save()
			.then((department) => {
				res.json(department)
			})
	}
	catch (err) {
		res.send(err)
	}
})

router.put('/:id', async (req, res) => {

	try {
		const apiId = req.params.id
		const departmentData = await Departments.findByIdAndUpdate(apiId, {
			name: req.body.name
		}, { runValidators: true })

		if (departmentData) {
			res.json(Object.assign(departmentData, req.body))
		}
		else {
			res.status(404).send('invalid uri')
		}
	}
	catch (err) {
		res.send(err)
	}
})

router.delete('/:id', async (req, res) => {
	const apiId = req.params.id
	const departmentData = await Departments.findByIdAndRemove(apiId)
	if (departmentData) {
		res.send(departmentData)
	}
	else {
		res.status(404).send('uri cannot be found')
	}
})

module.exports = { departmentController: router }
