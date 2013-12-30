// Generated by CoffeeScript 1.6.3
(function() {
  'use strict';
  var r, _connection;

  r = require('rethinkdb');

  _connection = void 0;

  exports.connect = function(options) {
    if (options == null) {
      options = {};
    }
    return function(done) {
      return r.connect(options, function(error, connection) {
        _connection = connection;
        return done(error, connection);
      });
    };
  };

  exports.disconnect = function() {
    return function(done) {
      if (!((_connection != null) && connection.open)) {
        fn(null);
      }
      return _connection.close(done);
    };
  };

  exports.run = function(query, connection) {
    if (connection == null) {
      connection = _connection;
    }
    return function(done) {
      return query.run(connection, done);
    };
  };

}).call(this);