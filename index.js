const express = require('express')
const app = express()

app.get('/',(req,res)   => {

    res.json("Hello world")

})

const PORT = 5000;
const server = app.listen(PORT);