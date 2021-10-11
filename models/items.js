const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  product:{
    type: String,
    required: true
  },
  color:{
    type: String,
    required: true
  },
  size:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  }
});

const Item = module.exports = mongoose.model('Item', ItemSchema);
