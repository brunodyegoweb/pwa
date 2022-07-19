var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render("../views/index");
});

app.listen(3000, function(){
    console.log('Executado na porta 3000')
})