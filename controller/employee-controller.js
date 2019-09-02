const express = require('express')
const router = express.Router()
const Employees = require('../model/employees')

router.get('/', (req, res) => {
	Employees.find()
		.then((employee) => {
			res.json(employee)
		})
})

router.post('/', (req, res) => {
	let employeeData = new Employees({
		name: req.body.name
	})
	try {
		employeeData.save()
			.then((employee) => {
				res.json(employee)
			})
	}
	catch (err) {
		res.send(err)
	}
})

router.put('/:id', (req, res) => {
	try {
		let apiId = req.params.id
		const employeeData = Employees.findByIdAndUpdate(apiId,
			{
				name: req.body.name,
			}, { runValidators: true })
		if (employeeData) {
			res.json(Object.assign(employeeData, req.body))
		}
		else {
			res.status(404).send('uri not found')
		}
	}
	catch (err) {
		res.send(err)
	}
})

router.delete('/:id', (req, res) => {
	let apiId = req.params.id
	const employeeData = Employees.findByIdAndRemove(apiId)
	if (employeeData) {
		res.json(employeeData)
	}
	else {
		res.status(404).send('uri not found')
	}
})

module.exports = { employeeController: router }