var router = require('express').Router();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

// return a list of tags
router.get('/', function(req, res, next) {
  Item.find().distinct('tagList').then(function(tags){
    return res.json({tags: tags});
  }).catch(next);
});

// return a list of titles
router.get('/', function(req, res, next) {
  Item.find().distinct('titleList').then(function(titles){
    return res.json({titles: titles});
  }).catch(next);
});

module.exports = router;
