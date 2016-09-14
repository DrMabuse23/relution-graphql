"use strict";
var graphql = require('graphql');
// Import the data you created above
var data = require('./user-data.json');
// Define the User type with two string fields: `id` and `name`.
// The type of User is GraphQLObjectType, which has child fields
// with their own types (in this case, GraphQLString).
var userType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: graphql.GraphQLString },
        name: { type: graphql.GraphQLString },
    }
});
// Define the schema with one top-level field, `user`, that
// takes an `id` argument and returns the User with that ID.
// Note that the `query` is a GraphQLObjectType, just like User.
// The `user` field, however, is a userType, which we defined above.
exports.schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: {
            user: {
                description: "get a user by id {user(id:\"2\"){name, id}}",
                type: userType,
                // `args` describes the arguments that the `user` query accepts
                args: {
                    id: { type: graphql.GraphQLString }
                },
                // The resolve function describes how to "resolve" or fulfill
                // the incoming query.
                // In this case we use the `id` argument from above as a key
                // to get the User from `data`
                resolve: function (_, args) {
                    return data[args.id];
                }
            },
            many: {
                description: "get many user by ids {many(ids:[\"2\",\"3\"]){name, id}} or all with {many{name, id}}",
                type: new graphql.GraphQLList(userType),
                // `args` describes the arguments that the `user` query accepts
                args: {
                    ids: { type: new graphql.GraphQLList(graphql.GraphQLString) }
                },
                resolve: function (_, args) {
                    if (!args.ids) {
                        return Object.keys(data).map(function (key) {
                            return data[key];
                        });
                    }
                    var users = [];
                    Object.keys(data).forEach(function (key) {
                        var user = data[key];
                        if (args.ids.indexOf(user.id) !== -1) {
                            users.push(user);
                        }
                        ;
                    });
                    return users;
                }
            }
        }
    })
});
//# sourceMappingURL=User.js.map