const express = require('express');// lib for create server
const routes = require('./routes'); // module for acess routes
const cors = require('cors') // lib for acess outhers sites 

const app = express();

app.use(cors())

app.use(express.json())
app.use(routes);

app.listen(3335, () => {
    console.log('Port 3335')
})