const express = require('express');

const bodyParser = require('body-parser');

const Routes = require('./routes/routes');
const rearme = require('./routes/rearme');
//const freqmanual = require('./routes/freqmanual')
const cors = require('cors');

const errorController = require('./controllers/error');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api', Routes);

app.use('/rearme', rearme);// update rearme

//app.use('/freqmanual', freqmanual); // update freq velocidade

const ports = process.env.PORT || 3000;

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`listening on port ${ports}`));