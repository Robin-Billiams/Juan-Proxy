const express = require('express')
const proxy = express()

//Middleware//
proxy.use(express.static(__dirname + '/../Public'))
////

proxy.get('/', (req, res) => {
    res.send('hello world!')
})


module.exports = proxy;