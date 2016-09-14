/**
 * @file app.js
 */
global['Map'] = require('es6-map/polyfill');
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {init as userRoute} from './routes/user';
import {init as pushRoute} from './routes/push';
import {init as connectorsRoute} from './routes/connectors';
import {init as routesRoute} from './routes/routes';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// global variables
global['app'] = app;

// install routes
// connectorsRoute(app);
// routesRoute(app);
// pushRoute(app);
userRoute(app);
app.get('/', function (req, res) {
  res.send('Hello World!');
});
// start express server
app.listen(app.get('port') ? app.get('port') : 3000);
