"use strict";
/**
 * @file app.js
 */
global['Map'] = require('es6-map/polyfill');
var express = require('express');
var bodyParser = require('body-parser');
var user_1 = require('./routes/user');
var push_1 = require('./routes/push');
var connectors_1 = require('./routes/connectors');
var routes_1 = require('./routes/routes');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// global variables
global['app'] = app;
// install routes
connectors_1.init(app);
routes_1.init(app);
push_1.init(app);
user_1.init(app);
app.get('/', function (req, res) {
    res.send('Hello World!');
});
// start express server
app.listen(app.get('port'));
//# sourceMappingURL=app.js.map