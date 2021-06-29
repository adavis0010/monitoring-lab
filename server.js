const express = require('express');
const rollbar = require('rollbar')
const path = require('path');

const app = express();

app.use(express.json())

const rollbar = new Rollbar({
    accessToken: '240b6d6fad95494cb0fbebf41a42094c',
    captureUncaught: true,
    captureUnhandledRejections: true
  });

app.get('/', function(req,res){
    rollbar.log("Hello World!")
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

const port = process.env.PORT || 4050;

app.listen(port, function(){
    console.log(`Server running on port ${port}`)
})