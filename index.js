var express = require('express');
var app = express();
app.listen(8201);
app.get("/",(req,res)=>{
    var options = {root:__dirname};
    res.sendFile("index.html",options);;
});

app.use('/themes', express.static(__dirname + '/themes'));
app.use('/js', express.static(__dirname + '/js'));
