const {Users} = require('../models');

// Users Controller
const usersController = {
  // GET All users
    getAllUsers(req, res) {
        Users.find({})
        // populate users thoughts
        .populate({path: 'thoughts', select: '-__v'})
        // populate user friends
        .populate({path: 'friends', select: '-__v'})
        .select('-__v')
        // .sort({_id: -1})
        .then(dbUsersData => res.json(dbUsersData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    
  // GET a single User by _id
  getUsersById({ params }, res) {
    Users.findOne({ _id: params.id })
    .populate({
      path: 'thoughts', 
      select: '-__v'
    })
    .populate({
      path: 'friends',
      select: '-__v'
    })
    .select('-__v')
    .then(dbUsersData => {
        // If no Users is found, send 404
        if (!dbUsersData) {
          res.status(404).json({ message: 'No Users found with this id!' });
          return;
        }
        res.json(dbUsersData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // POST a new user
  // {
  //   "username": "lernantino",
  //   "email": "lernantino@gmail.com"
  // }
  createUsers({ body }, res) {
    Users.create(body)
    .then(dbUsersData => res.json(dbUsersData))
    .catch(err => res.status(400).json(err));
  },
  
  // PUT to update a user by _id
  updateUsers({ params, body }, res) {
      Users.findOneAndUpdate(
        { _id: params.id }, body,
        { new: true, runValidators: true })
      .then(dbUsersData => {
          if(!dbUsersData) {
              res.status(404).json({ message: 'No User found with this ID!' });
              return;
          }
          res.json(dbUsersData);
      })
      .catch(err => res.json(err))
  },

  // DELETE to remove a user by _id
  deleteUsers({ params }, res) {
      Users.findOneAndDelete(
        { _id: params.id }
        )
      .then(dbUsersData => {
          if(!dbUsersData) {
              res.status(404).json({ message: 'No User found with this ID!' });
              return;
          }
          res.json(dbUsersData);
      })
      .catch(err => res.status(400).json(err));
  },

  // PUT to add friend
  addFriend({ params }, res) {
      Users.findOneAndUpdate(
        { _id: params.id },
        { $push: { friends: params.friendId } },
        { new: true }
        )
      .populate({
        path: 'friends',
        select: ('-__v')
      })
      .select('-__v')
      .then(dbUsersData => {
          if (!dbUsersData) {
              res.status(400).json({message: 'No User found with this ID!'});
              return;
          }
      res.json(dbUsersData);
      })
      .catch(err => res.json(err));
  },

  // DELETE a current Friend by _id
  deleteFriend({ params }, res) {
      Users.findOneAndUpdate(
        { _id: params.id },
        { $pull: { friends: params.friendId } },
        { new: true }
        )
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .select('-__v')
      .then(dbUsersData => {
          if(!dbUsersData) {
              res.status(404).json({ message: 'No User with this particular ID!' });
              return;
          }
          res.json(dbUsersData);
      })
      .catch(err => res.status(400).json(err));
  }

};

// Export module users controller
module.exports = usersController; 