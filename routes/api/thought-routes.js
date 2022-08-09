const router = require('express').Router();

const { getAllThoughts,
        createThoughts
} = require('../../controllers/thoughts-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts);

  // /api/Thoughts/:id
// router
// .route('/:id')
// .get(getThoughtsById)
// .put(updateThoughts)
// .delete(deleteThoughts);

// /api/Thoughts/<usersId>
router
  .route('/:userId')
  .post(createThoughts);
  
module.exports = router;