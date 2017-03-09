var express = require('express');
var router = express.Router();
var foodController = require('../controllers/foodControllers')
var restaurantController = require('../controllers/restaurantControllers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('please using /api to access');
});

// routing food
router.get('/api/food/:id', foodController.readFood)
router.get('/api/foods', foodController.readFoods)
router.post('/api/food', foodController.createFood)
router.put('/api/food/:id', foodController.updateFood)
router.delete('/api/food/:id', foodController.deleteFood)

// routing restaurant
router.get('/api/restaurant/:id', restaurantController.readRestaurant)
router.get('/api/restaurants', restaurantController.readRestaurants)
router.post('/api/restaurant', restaurantController.createRestaurant)
router.put('/api/restaurant/:id', restaurantController.updateRestaurant)
router.delete('/api/restaurant/:id', restaurantController.deleteRestaurant)

module.exports = router;
