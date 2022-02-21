const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/virtual-cv'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/virtual-cv/index.html'));
});

app.listen(process.env.PORT || 5000);