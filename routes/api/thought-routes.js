const router = require('express').Router();

const { getAllThoughts,
        createThoughts,
        getThoughtsById,
        updateThoughts,
        deleteThoughts,
        addReaction,
        deleteReaction
} = require('../../controllers/thoughts-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts);

  // /api/Thoughts/:id
  router
  .route('/:id')
  .get(getThoughtsById)
  .put(updateThoughts)
  .delete(deleteThoughts);

// /api/Thoughts/<usersId>
router
  .route('/:userId')
  .post(createThoughts);

// /api/thoughts/:thoughtId/reactions 
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

// /api/thoughts/:thoughtId/reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);
  
module.exports = router;