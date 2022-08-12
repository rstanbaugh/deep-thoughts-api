const mongoose = require('mongoose');
const { Users, Post } = require('../models');

const userData = [
  {
    userName: 'Joe',
    email: 'joe@gmail.ca',
  },
  {
    userName: 'Bob',
    email: 'bob@gmail.com',
  },
  {
    userName: 'fred',
    email: 'fred@gmail.com',
  },
  {
    userName: 'tom',
    email: 'tom@goo.ne.jp',
  },
  {
    userName: 'dick',
    email: 'dick@weather.com',
  },
  {
    userName: 'harry',
    email: 'harry@gmail.com',
  },
  {
    userName: 'sue',
    email: 'sue@yahoo.com',
  },
  {
    userName: 'anna',
    email: 'anna@yahoo.com',
  },
  {
    userName: 'charli',
    email: 'charli@google.com',
  },
  {
    userName: 'liesl',
    email: 'liesl@google.com',
  }
];

const seedUsers = async () => {
  await Users.deleteMany({});
  await Users.insertMany(userData)
}

module.exports = seedUsers;