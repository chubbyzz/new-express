const {Router} = require('express');
const AppController = require('./controllers/app_controllers');

const routes = Router();

routes.get('/index', AppController.index);

module.exports = routes;