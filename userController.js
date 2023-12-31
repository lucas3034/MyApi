const userRepository = require('./userRepository');
const User = require('./user');

class UserController {
  createUser(name, email, password) {
    const existingUser = userRepository.getUserByEmail(email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
    const newUser = new User(name, email, password);
    userRepository.addUser(newUser);
    return newUser;
  }

  getAllUsers() {
    return userRepository.getUsers();
  }

  deleteUser(email) {
    return userRepository.deleteUser(email);
  }

  updateUser(email, newData) {
    return userRepository.updateUser(email, newData);
  }
}

module.exports = new UserController();
