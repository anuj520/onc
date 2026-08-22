const{Router} = require('express');
const AiController = require('../Controllers/AiController');

const route = Router();

route.get('/result',AiController);

module.exports = route