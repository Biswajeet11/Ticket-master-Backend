const mongoose = require('mongoose')
const Schema = mongoose.Schema

const departmentSchema = new Schema({
	name: {
		type: String,
		minlength: 2,
		required: true,
		validate: {
			validator: function (name) {
				return name.length() >= 2
			},
			msg: function () {
				return 'department name less than 2 characters'
			}
		}
	}
})
const Department = mongoose.model('Department', departmentSchema)

module.exports = Department