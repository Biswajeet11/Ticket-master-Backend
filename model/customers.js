const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const customerSchema = new Schema({
	name: {
		type: String,
		minlength: 3,
		required: true,
		validate: {
			validator: function (name) {
				return name.length >= 3
			},
			msg: function () {
				return 'name  less than 3 characters'
			}
		}
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: function (email) {
				return validator.isEmail(email)
			},
			msg: function () {
				return 'invalid email'
			}
		},
	},
	mobile: {
		type: Number,
		minlength: 10,
		maxlength: 10,
		required: true,
		validate: {
			validator: function (mobile) {
				return mobile.toString().length == 10
			},
			msg: function () {
				return 'enter 10 digits mobile number'
			}
		}
	}
})
const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
