const router = require('express').Router();
const apiRoutes = require('./api');

// add prefix of `/api` to routes created in `api.js`
router.use('/api', apiRoutes);

// 404 Status error message
router.use((req, res) => {
  res.status(404).send('<h1>404 Error....</h1>');
});

module.exports = router;