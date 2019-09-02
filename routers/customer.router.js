const express = require('express');
const router = express.Router();
const {customerController} = require("../controller/customer-controller")

router.get('/', customerController.get);

router.post('/', customerController.post);

router.put('/:id', customerController.put);

router.delete('/:id', customerController.delete);

module.exports = router;