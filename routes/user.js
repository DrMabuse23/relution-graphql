/**
 * @file routes/connectors.js
 * project Backend
 */
"use strict";
// Relution APIs
// const connector = require('relution/connector.js');
// const backbone = require('backbone');
// import {sync as datasync} from '../routes/utils/datasync';
// const livedata = require('relution/livedata.js');
// export const userListOptions = {
//   entity: 'user_list',
//   type: {
//     container: 'user_list Container'
//   },
//   idAttribute: 'uuid',
//   aclAttribute: null,
//   backbone: backbone,
//   sync: datasync.sync
// };
// export const model = backbone.Model.extend(userListOptions);
// export const collection = backbone.Collection.extend(userListOptions);
var graphqlHTTP = require('express-graphql');
var User_1 = require('../models/User');
/**
 * module providing direct access to connectors.
 *
 * Used by Relution SDK connectors module for direct access to backend servers. If you do not want
 * or need this functionality, the routes defined herein can be removed.
 *
 * @param app express.js application to hook into.
 */
function init(app) {
    // app.get('/api/v1/user', livedata.middleware(userListOptions));
    app.use('/user', graphqlHTTP({ graphiql: true, schema: User_1.schema, pretty: true }));
}
exports.init = init;
//# sourceMappingURL=user.js.map