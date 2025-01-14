const { Router } = require('express');
const { CityController } = require('../controllers/city');
const { ExpenseController } = require('../controllers/expense');
const { UserController } = require('../controllers/user');
const { BusinessTripController } = require('../controllers/business-trip');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const router = Router();

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

// BusinessTrip routes
router.post('/business-trips', BusinessTripController.create);
router.get('/business-trips', BusinessTripController.read);
router.put('/business-trips/:id', BusinessTripController.update);
router.delete('/business-trips/:id', BusinessTripController.delete);

// City routes
router.get('/cities', CityController.read);

// Expense routes
router.post('/expenses', ExpenseController.create);
router.get('/expenses', ExpenseController.read);
router.put('/expenses/:id', ExpenseController.update);
router.delete('/expenses/:id', ExpenseController.delete);

// User routes
router.post('/users', UserController.create);
router.get('/users', UserController.read);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

module.exports = router;
