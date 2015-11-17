var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

//connect css
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
});

var port = process.env.PORT || 8080;

app.listen(port);