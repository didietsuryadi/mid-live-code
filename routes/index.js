var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('please using /api to access');
});

// routing books
router.get('/api/food/:id', foodController.readItem)
router.get('/api/foods', foodController.readItems)
router.post('/api/food', foodController.createItem)
router.put('/api/food/:id', foodController.updateItem)
router.delete('/api/food/:id', foodController.deleteItem)

// //routing customer
router.get('/api/restaurant/:id', restaurantController.readCustomer)
router.get('/api/restaurants', restaurantController.readCustomers)
router.post('/api/restaurant', restaurantController.createCustomer)
router.put('/api/restaurant/:id', restaurantController.updateCustomer)
router.delete('/api/restaurant/:id', customerController.deleteCustomer)

module.exports = router;
