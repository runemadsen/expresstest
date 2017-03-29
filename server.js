var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var app = express()

app.engine('handlebars', exphbs({
  defaultLayout: 'default',
  helpers: {
    toJSON : function(object) {
      return JSON.stringify(object);
    }
  }
}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {  
  res.render('home', {
    myVariable: "Rune Madsen",
    jsData: {
      name: "Rune"
    }
  });
});

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
