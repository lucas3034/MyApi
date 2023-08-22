const userRepository = require('./repository');
const User = require('./user');

class UserController {
  createUser(name, email, password) {
    const newUser = new User(name, email, password);
    userRepository.add(newUser);
    return newUser;
  }

  getAllUsers() {
    return userRepository.get();
  }

  delete(email) {
    return userRepository.delete(email);
  }

  edit(email, newData) {
    return userRepository.edit(email, newData);
  }
}

module.exports = new UserController();
