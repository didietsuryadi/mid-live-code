var Restaurant = require('../models/food')

module.exports = {
  createRestaurant: function(req,res){
    Restaurant.create({
      name: req.body.name,
      order: req.body.order,
      address: req.body.address,
      open_status: req.body.open_status
    }, function (err, data) {
      if (err) {
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  updateRestaurant: function(req,res){
    Restaurant.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  deleteRestaurant: function(req,res){
    Restaurant.findOneAndRemove({_id:req.params.id}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readRestaurants: function(req,res){
    Restaurant.find({}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readRestaurant: function(req,res){
    Restaurant.find({_id:req.params.id}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
}
