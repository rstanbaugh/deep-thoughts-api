// Require Thoughts and Users Models
const {Thoughts, Users} = require('../models');

// Set up Thoughts Controller
const thoughtsController = {

    // Create a new thought
    createThoughts({ params, body }, res) {
        Thoughts.create(body)
        .then(({ _id }) => {
            return Users.findOneAndUpdate(
              { _id: params.userId },
              { $push: { thoughts: _id } },
              { new: true });
        })
        .then(dbThoughtsData => {
            if(!dbThoughtsData) {
                res.status(404).json({ message: 'No thoughts with this particular ID!' });
                return;
            }
            res.json(dbThoughtsData)
        })
        .catch(err => res.json(err)); 
    },

    // GET all Thoughts
    getAllThoughts(req,res) {
        Thoughts.find({})
        .populate({
          path: 'reactions',
          select: '-__v'
        })
        .select('-__v')
        // .sort({_id: -1})
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },


    // GET a Thought by _id
    getThoughtsById({ params }, res) {
      Thoughts.findOne(
        { _id: params.id }
        )
      .populate({
        path: 'reactions',
        select: '-__v'
      })
      .select('-__v')
      .then(dbThoughtsData => {
          if(!dbThoughtsData) {
          res.status(500).json({ message: 'No thoughts with this ID!' });
          return;
      }
      res.json(dbThoughtsData)
      })
      .catch(err => {
          console.log(err);
          res.sendStatus(400);
      });
  },

  // UPDATE a thought by _id
  updateThoughts({ params, body }, res) {
      Thoughts.findOneAndUpdate(
        { _id: params.id }, body, 
        { new: true, runValidators: true }
        )
      .populate({ path: 'reactions', select: '-__v' })
      .select('-___v')
      .then(dbThoughtsData => {
          if (!dbThoughtsData) {
              res.status(404).json({ message: 'No thoughts with this particular ID!' });
              return;
          }
              res.json(dbThoughtsData);
      })
      .catch(err => res.json(err));
  },

  // DELETE a thought by _id
  deleteThoughts({ params }, res) {
      Thoughts.findOneAndDelete({ _id: params.id })
      .then(dbThoughtsData => {
          if (!dbThoughtsData) {
              res.status(404).json({ message: 'No thoughts with this particular ID!' });
              return;
          }
          res.json(dbThoughtsData);
          })
          .catch(err => res.status(400).json(err));
  },

  // ADD a  Reaction
  addReaction({ params, body }, res) {
      Thoughts.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: {reactions: body } },
        { new: true, runValidators: true }
        )
      .populate({
        path: 'reactions',
        select: '-__v'
      })
      .select('-__v')
      .then(dbThoughtsData => {
      if (!dbThoughtsData) {
          res.status(500).json({ message: 'No thoughts with this ID!' });
          return;
      }
      res.json(dbThoughtsData);
      })
      .catch(err => res.status(400).json(err))

  },

  // DELETE a reaction by _id
  deleteReaction({ params }, res) {
    console.log('deleteing reaction.....');
    console.log('thoughId: ', { _id: params.thoughtId })
    console.log('reactionId: ', { reactionId: params.reactionId });

      Thoughts.findOneAndUpdate(
        { _id: params.thoughtId },
        { $pull: {reactions: { reactionId: params.reactionId } } },
        { new : true })
      .then(dbThoughtsData => {
          if (!dbThoughtsData) {
              res.status(500).json({ message: 'No thoughts with this ID!' });
              return;
          }
          res.json(dbThoughtsData);
      })
      .catch(err => res.status(500).json(err));
  }
};

// Export module thought controller
module.exports = thoughtsController;