const router = require('express').Router();
const { Products } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const products = await Products.getAllProducts();

    res.send(products);
  } catch (error) {
    next(error);
  }
});

router.get('/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Products.getProductById(productId);

    res.send(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, description, price, imageURL, inStock, category } = req.body;

    const newProduct = await Products.createProduct({
      name,
      description,
      price,
      imageURL,
      inStock,
      category,
    });

    res.send(newProduct);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
