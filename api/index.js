const apiRouter = require('express').Router();

apiRouter.get('/', (req, res, next) => {
  res.send({
    message: 'API is under construction!',
  });
});

apiRouter.get('/health', (req, res, next) => {
  res.send({
    healthy: true,
  });
});

// apiRouter.use('/products', require('./products'));
// apiRouter.use('/users', require('./users'));
// apiRouter.use('/orders', require('./orders'));
// apiRouter.use('/orderProducts', require('./orderProducts'));

module.exports = apiRouter;
