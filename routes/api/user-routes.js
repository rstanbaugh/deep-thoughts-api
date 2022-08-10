const router = require('express').Router();

const {
  getAllUsers,
  createUsers,
  getUsersById,
  updateUsers,
  deleteUsers,
  addFriend,
  deleteFriend
} = require('../../controllers/users-controller');

// /api/Users
router
  .route('/')
  .get(getAllUsers)
  .post(createUsers);

// /api/Users/:id
router
  .route('/:id')
  .get(getUsersById)
  .put(updateUsers)
  .delete(deleteUsers);

// /api/users/<usersId>/<friendId>
router
  .route('/:id/:friendId')
  .put(addFriend)
  .delete(deleteFriend);
  
module.exports = router;