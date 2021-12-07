module.exports = mongoose => {
  const Cart = mongoose.model(
    'cart',
    mongoose.Schema({
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
