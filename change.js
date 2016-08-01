const fs = require('fs');

let users = require('./users.json');

users = users.map(user => {
  let num = Math.random();
  if (num <= .1) {
    user.type = 'admin';
  } else if (num <= .3) {
    user.type = 'moderator';
  }
  else {
    user.type = 'user';
  }

  user.favorites = [];
  num = Math.random();
  if (num <= .3) {
    user.favorites.push('cats', 'dogs', 'angular', 'node', 'mongodb', 'sql')
  } else if (num <= .5) {
    user.favorites.push('angular', 'html', 'css', 'react')
  } else if (num <= .9) {
    user.favorites.push('angular', 'react')
  } else {
    user.favorites.push('cats')
  }

  num = Math.random();
  if (num <= .4) {
    user.language = 'english';
  } else if(num <= .6) {
    user.language = 'french';
  } else if(num <= .9) {
    user.language = 'spanish';
  } else {
    user.language = 'klingon';
  }

  return user;
})

fs.writeFileSync('newUsers.json', JSON.stringify(users, null, 2))
