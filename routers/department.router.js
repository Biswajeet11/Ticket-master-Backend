const express = require('express')
const router = express.Router()
const { departmentController } = require('../controller/department-controller')

router.get('/', departmentController.get);

router.post('/', departmentController.post);

router.put('/:id', departmentController.put);

router.delete('/:id', departmentController.delete);

module.exports = router;