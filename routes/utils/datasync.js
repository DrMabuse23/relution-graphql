'use strict';
/**
 * @file utils/datasync.js
 */
var util = require('util');
var Q = require('q');
// Relution APIs
var datasync = require('relution/datasync.js');
/**
 * module providing advanced connector APIs.
 */
exports.sync = {
    // pass-through
    sync: datasync.sync,
    /**
     * installs a Q-Promise into an options object.
     *
     * @param {object} options to install promise to.
     * @return {object} options.
     */
    backboneQ: function backboneQ(options) {
        var q = Q.defer();
        options.success = function successQ(model, resp, opts) {
            return q.resolve(resp);
        };
        options.error = function errorQ(model, error, opts) {
            return q.reject(error);
        };
        options.promise = q.promise;
        return options;
    }
};
//# sourceMappingURL=datasync.js.map