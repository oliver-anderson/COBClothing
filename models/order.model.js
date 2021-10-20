module.exports = mongoose => {
  const Order = mongoose.model(
    'order',
    mongoose.Schema({
      cart: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Cart'
      },
      firstname: {
        type: String,
        required: true
      },
      lastname: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      zip: {
        type: Number,
        required: true
      },
      card: {
        type: Number,
        required: true
      },
      cvv: {
        type: Number,
        required: true
      },
    })
  );

  return Order;
};
