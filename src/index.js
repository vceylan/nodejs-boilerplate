const config = require('../config/' + process.env.NODE_ENV + '.env')
const express = require('express')
const fs = require('fs')
const app = express()

// Load configs
Object.keys(config).forEach(function (key) {
    process.env[key] = config[key]
})

// Load routes
let dir = './src/routes/'
fs.readdirSync(dir).forEach(function (file1) {
    if (fs.statSync(dir + file1).isDirectory()) {
        fs.readdirSync(dir + file1).forEach(function (file2) {
            app.use('/api/' + file1, require('./routes/' + file1 + '/' + file2))
        })
    }
})

// Start server
app.listen(process.env.port, function () {
    console.log('Server started on: ' + process.env.port)
})
