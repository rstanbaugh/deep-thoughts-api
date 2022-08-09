const router = require('express').Router();

const {
  getAllUsers,
  createUsers,
} = require('../../controllers/users-controller');

// /api/Users
router
  .route('/')
  .get(getAllUsers)
  .post(createUsers);

  // /api/Users/:id
// router
// .route('/:id')
// .get(getUsersById)
// .put(updateUsers)
// .delete(deleteUsers);

// /api/users/<usersId>/friends/<friendId>
// router
//   .route('/:id/friends/:friendId')
//   .post(addFriend)
//   .delete(deleteFriend);
  
module.exports = router;