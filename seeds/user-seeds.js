const mongoose = require('mongoose');
const { Users, Post } = require('../models');

const userData = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
  }
];

const seedUsers = async () => {
  await Users.deleteMany({});
  await Users.insertMany(userData)
}

module.exports = seedUsers;