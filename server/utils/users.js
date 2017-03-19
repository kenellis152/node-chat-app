
// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser (id) {
    //return deleted user
    var index;
    var result;
    this.users.forEach( (user, i) => {
      if (user.id === id) {
        index = i;
      }
    });
    if (index) {
      result = this.users[index];
      this.users.splice(index, 1);
    }
    return result;
  }

  getUser (id) {
    //return user with id
    var result;
    this.users.forEach((user) => {
      if (user.id === id) {
        result = user;
      }
    });
    return result;
  }

  getUserList(room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    return namesArray;
  }
}

module.exports = {Users};
// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old`;
//   }
// }
//
// var me = new Person('Andrew', 25);
// console.log(me.getUserDescription());
