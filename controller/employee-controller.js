const express = require('express')
const router = express.Router()
const Employees = require('../model/employees')

let employee = {};

employee.get = (req, res) => {
	Employees.find()
		.then((employee) => {
			res.json(employee)
		})
}

employee.post = (req, res) => {
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
}

employee.put = (req, res) => {
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
}

employee.delete = (req, res) => {
	let apiId = req.params.id
	const employeeData = Employees.findByIdAndRemove(apiId)
	if (employeeData) {
		res.json(employeeData)
	}
	else {
		res.status(404).send('uri not found')
	}
}

module.exports = { employeeController: employee }