const {Users} = require('../models');

// Users Controller
const usersController = {
  // GET All users
  getAllUsers(req, res) {
    Users.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .select('-__v')
      // .sort({ _id: -1 })
      .then(dbUsersData => res.json(dbUsersData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // GET a single User by _id

  // POST a new user
  // {
  //   "username": "lernantino",
  //   "email": "lernantino@gmail.com"
  // }
  createUsers({body}, res){
    Users.create(body)
    .then(dbUsersData => res.json(dbUsersData))
    .catch(err => res.status(400).json(err));
  }

  // PUT to update a user by _id

  // DELETE to remove a user by _id
  // bonus - remove associated thoughts when deleted

  // PUT to add friend

  // DELETE friend
}