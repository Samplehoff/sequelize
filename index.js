const express = require('express');
const app = express();
const models = require('./models');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/artist", function(req, response) {
    models.artist.findAll().then(function(artist){
        response.send(artist)
    });
});

app.post("/artist", function(req, response) {
    models.artist.create({name: req.body.name, dob: req.body.dob}).then(function(artist){
        response.send("new artist created with id: " + artist.id);
    });
})

app.listen(3000, function(){
    console.log('server listening on port 3000')
})