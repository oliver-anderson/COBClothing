const db = require('../models');
const Order = db.orders;


// Create and Save a new Order
exports.create = (req, res) => {
  // Validate request
  if (!req.body.cart) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  // Create a Order
  const order = new Order({
    cart: req.body.cart,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    card: req.body.card,
    cvv: req.body.cvv
  });

  // Save Order in the database
  order
    .save(order)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Order.'
      });
    });
};

// Retrieve all Orders from the database.
exports.findAll = (req, res) => {
  const order = req.query.order;
  var condition = order ? { order: { $regex: new RegExp(order), $options: 'i' } } : {};

  Order.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving orders.'
      });
    });
};

// Update a Order by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!'
    });
  }

  const id = req.params.id;

  Order.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Order with id=${id}. Maybe Order was not found!`
        });
      } else res.send({ message: 'Order was updated successfully.' });
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating Order with id=' + id
      });
    });
};

// Delete a Order with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Order.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Order with id=${id}. Maybe Order was not found!`
        });
      } else {
        res.send({
          message: "Order was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Order with id=" + id
      });
    });
};

// Delete all Orders from the database.
exports.deleteAll = (req, res) => {
  Order.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Orders were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all orders.'
      });
    });
};
