const express = require('express')
const app = express()

app.get('/',(req,res)   => {

    res.json("Haha - I hacked the teacher")

})

const PORT = 5000;
const server = app.listen(PORT);