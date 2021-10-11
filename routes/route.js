const express = require('express');
const router = express.Router();

const Item = require('../models/items');

//retrieve items
router.get('/items', (req, res, next)=>{
  Item.find(function(err, items){
    res.json(items);
  });
});

//create items
router.post('/items',(req, res, next)=>{
  let newItem = new Item({
    product: req.body.product,
    color: req.body.color,
    size: req.body.size,
    price: req.body.price
  });

  newItem.save((err, items)=>{
    if(err){
      res.json({msg: 'Failed to add item'});
    }
    else{
      res.json({msg: 'Item added successfully'});
    }
  });
});

//delete items
router.delete('/items/:id',(req, res, next)=>{
  Item.remove({_id: req.params.id}, function(err, result){
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  });
});

module.exports = router;
