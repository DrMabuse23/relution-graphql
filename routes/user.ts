/**
 * @file routes/connectors.js
 * project Backend
 */

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
const graphqlHTTP = require('express-graphql');
import {schema} from '../models/User';
/**
 * module providing direct access to connectors.
 *
 * Used by Relution SDK connectors module for direct access to backend servers. If you do not want
 * or need this functionality, the routes defined herein can be removed.
 *
 * @param app express.js application to hook into.
 */
export function init(app: any) {
  // app.get('/api/v1/user', livedata.middleware(userListOptions));
  app.use('/user', graphqlHTTP({ graphiql: true, schema: schema, pretty: true }))
}

