const express = require('express');
const userController = require('./userController');

const router = express.Router();

router.post('/users', (req, res) => {
  const { name, email, password } = req.body;
  const newUser = userController.createUser(name, email, password);
  res.status(201).json(newUser);
});

router.get('/users', (req, res) => {
  const users = userController.getAllUsers();
  res.json(users);
});

router.delete('/users/:email', (req, res) => {
  const { email } = req.params;
  const deleted = userController.deleteUser(email);
  if (deleted) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

router.put('/users/:email', (req, res) => {
  const { email } = req.params;
  const newData = req.body;
  const updated = userController.updateUser(email, newData);
  if (updated) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
