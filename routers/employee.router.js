const express = require('express');
const router = express.Router();
const {employeeController} = require("../controller/employee-controller")

router.get('/', employeeController.get);

router.post('/', employeeController.post);

router.put('/:id', employeeController.put);

router.delete('/:id', employeeController.delete);

module.exports = router;