const express = require('express')
const router = express.Router()
const Departments = require('../model/departments')

let department = {};

department.get = (req, res) => {
	Departments.find()
		.then((department) => {
			res.json(department)
		})
		.catch(err => console.log(err))
}

department.post = async (req, res) => {

	let departmentData = new Departments(req.body)
	try {
		await departmentData.save()
			.then((department) => {
				res.json(department)
			})
	}
	catch (err) {
		res.send(err)
	}
}

department.put = async (req, res) => {

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
}

department.delete = async (req, res) => {
	const apiId = req.params.id
	const departmentData = await Departments.findByIdAndRemove(apiId)
	if (departmentData) {
		res.send(departmentData)
	}
	else {
		res.status(404).send('uri cannot be found')
	}
}

module.exports = { departmentController: department }
