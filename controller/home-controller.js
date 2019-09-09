const express = require('express')
const router = express.Router()

let home = {};

home.get = (req, res) => {
	res.send('welcome..')
}

module.exports = { homeController: home };