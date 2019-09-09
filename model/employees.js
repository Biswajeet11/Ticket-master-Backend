const mongoose = require('mongoose')

const Schema = mongoose.Schema

const employeesSchema = new Schema({
	name: {
		type: String,
		minlength: 3,
		maxlength: 30,
		required: true,
	},
	email:{
		type:String,
		required:true,
	},
	mobile:{
		type:Number,
		required:true
	},
	departmentId:{
		type:Schema.Types.ObjectId,
		ref:'Department'
	}
})
const Employee = mongoose.model('Employee', employeesSchema)
module.exports = Employee