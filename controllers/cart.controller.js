const db = require('../models');
const Cart = db.carts;
const Item = db.items;

// Create and Save a new Cart
exports.create = (req, res) => {
  // Validate request
  if (!req.body.items) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  // Create a Cart
  const cart = new Cart({
    cartId: req.body.cartId,
    items: req.body.items,
    total: req.body.total,
    active: req.body.active ? req.body.active : true
  });

  // Save Cart in the database
  cart
    .save(cart)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Cart.'
      });
    });
};

// Retrieve all Carts from the database.
exports.findAll = (req, res) => {
  const cartId = req.query.cartId;
  var condition = cartId ? { cartId: { $regex: new RegExp(cartId), $options: 'i' } } : {};

  Cart.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving carts.'
      });
    });
};

// Update a Cart by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!'
    });
  }

  const id = req.params.id;

  Cart.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Cart with id=${id}. Maybe Cart was not found!`
        });
      } else res.send({ message: 'Cart was updated successfully.' });
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating Cart with id=' + id
      });
    });
};

// Delete a Cart with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Cart.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Cart with id=${id}. Maybe Cart was not found!`
        });
      } else {
        res.send({
          message: "Cart was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Cart with id=" + id
      });
    });
};

// Delete all Carts from the database.
exports.deleteAll = (req, res) => {
  Cart.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Carts were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all carts.'
      });
    });
};

exports.findOne = (req, res) => {
  const cartId = req.params.cartId;

  Cart.findOne({ cartId: cartId })
  .populate("items")
  /*.then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot populate Cart with id=${cartId}. Maybe Cart was not found!`
      });
    } else {
      res.send({
        message: "Cart was populated successfully!"
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not populate Cart with id=" + cartId + err
    });
  })*/
  .exec((err, items) => {
      console.log("Populated Cart Items: " + items);
  });
};
