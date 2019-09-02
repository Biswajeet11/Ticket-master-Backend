const express = require('express')
const router = express.Router()
const Customers = require('../model/customers')

let customer = {};

customer.get = (req, res) => {
	Customers.find()
		.then((customer) => {
			res.json(customer)
			console.log(customer)
		})
		.catch(err => res.send(err))
};

customer.post = async (req, res) => {
	const customerData = new Customers({
		name: req.body.name,
		email: req.body.email,
		mobile: req.body.mobile,
	})
	await customerData.save()
		.then((customer) => {
			res.json(customer)
			console.log('Customers .....', customer)
		})
		.catch(err => res.send(err))
};

customer.put = async (req, res) => {
	try {
		const apiId = req.params.id
		const customerData = await Customers.findByIdAndUpdate(apiId,
			{
				name: req.body.name,
				email: req.body.email,
				mobile: req.body.mobile,
			}, { runValidators: true })

		if (customerData) {
			res.json(Object.assign(customerData, req.body))
		}
		else {
			res.status(404).send('url not found')
		}
	}
	catch (err) {
		res.send(err)
	}
}

customer.delete = async (req, res) => {
	const apiId = req.params.id
	const customerData = await Customers.findByIdAndRemove(apiId)
	try {
		if (customerData) {
			res.json(customerData)
		}
		else {
			res.status(404).send('url not found')
		}
	}
	catch (err) {
		res.send(err)
	}
};

module.exports = { customerController: customer };