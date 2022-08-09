const router = require('express').Router();
const usersRoutes = require('./user-routes');
const thoughtsRoutes = require('./thought-routes');


// add prefix of `/users` to routes created in `users-routes.js`
router.use('/users', usersRoutes);

// add prefix of `/thoughts` to routes created in `thoughts-routes.js`
router.use('/thoughts', thoughtsRoutes);


module.exports = router;