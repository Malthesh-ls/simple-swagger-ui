const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerJsonDocument = require('./api/swagger.json');

const swaggerYamlDocument = YAML.load('./src/api/swagger.yaml');

var options = {
  explorer: true,
  customCssUrl: '/css/custom.css'
};

router.use('/json', swaggerUi.serve);
router.get('/json', swaggerUi.setup(swaggerJsonDocument, options));


router.use('/yaml', swaggerUi.serve);
router.get('/yaml', swaggerUi.setup(swaggerYamlDocument, options));

module.exports = router
