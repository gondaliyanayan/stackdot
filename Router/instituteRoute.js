const express = require('express');
const instituteRouter = express.Router();
const controller = require("../Controller/instituteController");

instituteRouter.post('/institute',controller.createInstitute);
instituteRouter.put('/update-institute/:id',controller.updateInstitude);
instituteRouter.delete('/delete-institute/:id',controller.deleteInstitude);
instituteRouter.get('/all-institute',controller.getInstitude);

module.exports = instituteRouter;