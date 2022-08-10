const mongoose = require('mongoose');
const { Users, Post } = require('../models');

const userData = [
  {
    userName: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
  },
  {
    userName: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
  },
  {
    userName: 'iboddam2',
    email: 'cstoneman2@last.fm',
  },
  {
    userName: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
  },
  {
    userName: 'djiri4',
    email: 'gmidgley4@weather.com',
  },
  {
    userName: 'msprague5',
    email: 'larnout5@imdb.com',
  },
  {
    userName: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
  },
  {
    userName: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
  },
  {
    userName: 'msabbins8',
    email: 'lmongain8@google.ru',
  },
  {
    userName: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
  }
];

const seedUsers = async () => {
  await Users.deleteMany({});
  await Users.insertMany(userData)
}

module.exports = seedUsers;