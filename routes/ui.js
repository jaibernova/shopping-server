import express from 'express';
import passportAuth from '../authentication/passportAuth';
import uiController from '../controllers/uiController.js';
import orderController from '../controllers/orderController';
var router = express.Router();

/* GET UI Customziations Endpoint. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Veniqa User Interface Customizations' });
});

router.get('/featured', uiController.getFeaturedSection);

router.post('/payu', orderController.createPaymentTokenPayu);

router.get('/productCategoryList', uiController.getProductCategoryList);

module.exports = router;