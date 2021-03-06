'use strict';
var request = require('request');
var format = require('../lib/format');

module.exports = function (api) {
  api.orders = {};

  api.orders.list = function (opts, cb) {
    var data = { url: '/3/orders', query: opts };
    api.send.get(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, format.page(api, body));
    });
  }

  api.orders.create = function (opts, cb) {
    var data = { url: '/3/orders', body: opts };
    api.send.post(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, body);
    });
  }

  api.orders.createInvoice = function createInvoice(id, cb) {
    var data = { url: '/3/orders/' + escape(id) + '/createinvoice' };
    api.send.put(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, body);
    });
  }
}

