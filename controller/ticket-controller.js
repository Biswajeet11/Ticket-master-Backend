const express = require('express')
const router = express.Router()
const Tickets = require('../model/tickets')

let ticket = {}

ticket.get = (req, res) => {
    Tickets.find()
        .then((response) => {
            res.json(response)
        })
}

ticket.post =  (req, res) => {
    const body=req.body
    const ticketData=new Tickets(body)
    ticketData.save()
    .then((ticket)=>{
        res.json(ticket)
    })
    .catch(err=>res.send(err))
}

ticket.put = (req, res) => {
	try {
		let apiId = req.params.id
		const ticketData = Tickets.findByIdAndUpdate(apiId,
			req.body, { runValidators: true })
		if (ticketData) {
			res.json(Object.assign(ticketData, req.body))
		}
		else {
			res.status(404).send('uri not found')
		}
	}
	catch (err) {
		res.send(err)
	}
}

ticket.delete = (req, res) => {
	let apiId = req.params.id
	const ticketData = Employees.findByIdAndRemove(apiId)
	if (ticketData) {
		res.json(ticketData)
	}
	else {
		res.status(404).send('uri not found')
	}
}

module.exports = { ticketController: ticket }