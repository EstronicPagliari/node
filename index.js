const express = require('express');

const bodyParser = require('body-parser');

const Routes = require('./routes/routes');
const rearme = require('./routes/rearme');
const freq = require('./routes/freqmanual')
const receita = require('./routes/receita');
const receitaid = require('./routes/receitaid');
const forno = require('./routes/forno');
const cors = require('cors');

const errorController = require('./controllers/error');

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  app.use(cors());
  next();
});

app.use('/api', Routes);

app.use('/rearme', rearme);

app.use('/freq', freq);

app.use('/receita', receita);

app.use('/receitaid', receitaid);

app.use('/forno',forno);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`listening on port ${ports}`));