const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerRouter = require('./src/swagger');
const SWAGGER_PORT = process.env.PORT || 8000;



app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('index.html')
});

app.use(swaggerRouter);

app.listen(SWAGGER_PORT, () => console.log(`Swagger ui app listening at http://localhost:${SWAGGER_PORT}`))