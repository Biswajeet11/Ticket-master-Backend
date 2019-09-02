const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/sample', { useNewUrlParser: true }).then(() => {
	console.log(`connected to db .... `)
})
	.catch(err => console.log(err))
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
module.exports = mongoose