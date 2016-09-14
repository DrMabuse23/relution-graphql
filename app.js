"use strict";
/**
 * @file app.js
 */
global['Map'] = require('es6-map/polyfill');
var express = require('express');
var bodyParser = require('body-parser');
var user_1 = require('./routes/user');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// global variables
global['app'] = app;
// install routes
// connectorsRoute(app);
// routesRoute(app);
// pushRoute(app);
user_1.init(app);
app.get('/', function (req, res) {
    res.send('Hello World!');
});
// start express server
app.listen(app.get('port') ? app.get('port') : 3000);
//# sourceMappingURL=app.js.map