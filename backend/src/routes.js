const express = require('express');
const DevController = require('./controllers/DevController');
const LikesController = require('./controllers/LikesController');
const DislikesController = require('./controllers/DislikesController');


const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikesController.store);
routes.post('/devs/:devId/dislikes', DislikesController.store);


module.exports = routes;