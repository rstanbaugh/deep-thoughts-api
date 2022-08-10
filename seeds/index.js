const seedUsers = require('./user-seeds');
// const seedPosts = require('./post-seeds');
// const seedComments = require('./comment-seeds');

const mongoose = require('mongoose');

const seedAll = async () => {
  await seedUsers();
  console.log('--------------');

  // await seedThoughts();
  // console.log('--------------');

  // await seedComments();
  // console.log('--------------');

  process.exit(0);
};


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/deep-thoughts-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('mongo connection open');
})
.catch((err) => {
  console.log(err);
});

seedAll()
.then(() => {
  mongoose.connection.close()
  .then(() => {
    console.log('mongo connection closed')
  });
});


