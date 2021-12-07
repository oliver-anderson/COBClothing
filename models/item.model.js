module.exports = mongoose => {
  const Item = mongoose.model(
    'item',
    mongoose.Schema({
      product: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      },
      size: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    })
  );

  return Item;
};
