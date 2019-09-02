const mongoose = require('mongoose')

const Schema = mongoose.Schema

const employeesSchema = new Schema({
	name: {
		type: String,
		minlength: 3,
		maxlength: 30,
		required: true,
	},
})
const Employee = mongoose.model('Employee', employeesSchema)
module.exports = Employee