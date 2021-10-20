module.exports = app => {
  const order = require('../controllers/order.controller.js');

  var router = require('express').Router();

  // Create a new Order
  router.post('/', order.create);

  // Retrieve all Orders
  router.get('/', order.findAll);

  // Update a Order with id
  router.put('/:id', order.update);

  // Delete a Order with id
  router.delete("/:id", order.delete);

  // Delete all Order
  router.delete('/', order.deleteAll);

  app.use('/api/order', router);
};
