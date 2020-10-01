const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();
// /shop => GET (index Page)
router.get('/', shopController.getIndex);

// /shop/products => GET
router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

// /shop/cart => GET
router.get('/cart', shopController.getCart);

// add item to cart => POST
router.post('/cart', shopController.postCart);

// /shop/orders => GET
router.get('/orders', shopController.getOrders);

// /shop/checkout => GET
router.get('/checkout', shopController.getCheckout);

module.exports = router;
