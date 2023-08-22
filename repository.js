class Repository {
  constructor() {
    this.users = [];
  }

  add(user) {
    this.users.push(user);
  }

  get() {
    return this.users;
  }

  findByEmail(email) {
    return this.users.find(user => user.email === email);
  }

  delete(email) {
    const index = this.users.findIndex(user => user.email === email);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }

  edit(email, newData) {
    const user = this.findByEmail(email);
    if (user) {
      Object.assign(user, newData);
      return true;
    }
    return false;
  }
}

module.exports = new Repository();
