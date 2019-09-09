const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketsSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department'
    },
    employees: {
        type: [Schema.Types.ObjectId],
        ref: 'Employee'
    },
    message: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    isResolved: {
        type: Boolean,
        required: true,
    },
    code: {
        type: String,
        required: true,
    }
})
const Ticket = mongoose.model('Ticket', ticketsSchema)
module.exports = Ticket