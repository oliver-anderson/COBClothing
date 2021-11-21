module.exports = mongoose => {
  const ItemSchema = new mongoose.Schema ({
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
    }
  })

  const Item = mongoose.model("Item", ItemSchema);

};
