var Food = require('../models/food')

module.exports = {
  createFood: function(req,res){
    Food.create({
      name: req.body.name,
      price: req.body.price,
      expired_date: req.body.expired_date,
    }, function (err, data) {
      if (err) {
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  updateFood: function(req,res){
    Food.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  deleteFood: function(req,res){
    Food.findOneAndRemove({_id:req.params.id}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readFoods: function(req,res){
    Food.find({}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readFood: function(req,res){
    Food.find({_id:req.params.id}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
}
