const express = require('express');
const path = require('path');
const { inherits } = require('util');

const app = express();

app.use(express.json())

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

const port = process.env.PORT || 4050;

app.listen(port, function(){
    console.log(`Server running on port ${port}`)
})