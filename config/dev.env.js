'use strict'

const index = require('./index')

module.exports = Object.assign(index.dev, {
  APIURL: function (apiVersion) {
    return 'http://localhost:3000/' + (apiVersion ? apiVersion : 'v1')
  }
})
