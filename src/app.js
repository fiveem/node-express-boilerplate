const express = require('express')
const app = express()

app.get('/', (req, res) => res.send({
    success: true,
    message: 'Hello!'
}))

module.exports = app