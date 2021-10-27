const { Router } = require("express");

const routes = Router();
const UserController = require('./controllers/userController');


routes.post('/register', UserController.create);
routes.post('/login', UserController.login);


module.exports = routes;