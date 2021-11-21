module.exports = mongoose => {
  const Cart = mongoose.model(
    'cart',
    mongoose.Schema({
      cartId: {
        type: Number,
        required: true
      },
      items: [{
          type: mongoose.Schema.Types.ObjectID,
          ref: 'Item'
      }],
      total: {
        type: Number,
        required: true
      },
      active: {
        type: Boolean,
        required: true
      }
    })
  );

  return Cart;
};
