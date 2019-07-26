const express = require('express')
const app = express()
const massive  = require('massive')
require('dotenv').config()
const ctrl = require('./controller')

app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
.then((dbInstance) => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} puppies on parade`))
})
.catch(err => console.log(err, 'cannot connect to database'))

console.log(CONNECTION_STRING)
console.log(SERVER_PORT)