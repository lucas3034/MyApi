const User = require('./user');

class UserRepository {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  getUserByEmail(email) {
    return this.users.find(user => user.email === email);
  }

  deleteUser(email) {
    const index = this.users.findIndex(user => user.email === email);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }

  updateUser(email, newData) {
    const user = this.getUserByEmail(email);
    if (user) {
      Object.assign(user, newData);
      return true;
    }
    return false;
  }
}

module.exports = new UserRepository();
