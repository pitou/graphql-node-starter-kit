var express = require('express');
var graphqlHTTP = require('express-graphql')
var bodyParser = require('body-parser');

var schema = require('./graphql/schema');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: 'RootQueryType',
    pretty: true,
    graphiql: true
}));

app.use('/', function(req, res) {
   res.send('Please go to <a href="http://localhost:3000/graphql">this url</a>.');
});

var port = 3000;
app.listen(port, function() {
    console.log('Express server listening on port %d in %s mode', port, app.settings.env );
});
