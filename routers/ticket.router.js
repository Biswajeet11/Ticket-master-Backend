const express = require('express');
const router = express.Router();
const { ticketController } = require("../controller/ticket-controller")

router.get('/', ticketController.get);

router.post('/', ticketController.post);

router.put('/:id', ticketController.put);

router.delete('/:id', ticketController.delete);

module.exports = router;