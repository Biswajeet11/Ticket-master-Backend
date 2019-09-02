const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({

	name: {
		type: String,
		minlength: 3,
		required: true,
		validate: {
			validator: function (value) {
				return value.length >= 3
			},
			msg: function () {
				return 'Name has less than 3 characters'
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
	password: {
		type: String,
		minlength: 8,
		required: true,
		validate: {
			validator: function (password) {
				return password.length >= 8
			},
			msg: function () {
				return 'password is less than 8 characters'
			}
		}
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

userSchema.methods.generateToken = function () {
	const token = jwt.sign(
		{
			email: this.email,
		},
		{ expiresIn: '1d' })
	return token
}

userSchema.methods.findToken = function () {
	console.log(`token......... ${token}`)
}

const User = mongoose.model('User', userSchema)

module.exports = User
