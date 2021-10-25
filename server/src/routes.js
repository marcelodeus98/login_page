const { Router } = require("express");

const routes = Router();
const UserController = require('./controllers/userController');


routes.post('/register', UserController.create);
routes.get('/login', UserController.show);


module.exports = routes;