var mongo_express = require('mongo-express/lib/middleware');
var mongo_express_config = require('mongo-express/config.default.js');
var bodyParser = require('body-parser');
var validate = require('express-jsonschema').validate;
var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
var ObjectID = MongoDB.ObjectID;
var url = 'mongodb://localhost:27017/LAF';
var express = require('express');
var app = express();

MongoClient.connect(url, function(err, db) {
  app.use(bodyParser.text());
  app.use(bodyParser.json());
  app.use(express.static('../client/build'));
  app.use('/mongo_express',mongo_express(mongo_express_config));

/*-------------important:all function must above this line!!!----------------*/
  app.use(function(err, req, res, next) {
    if (err.name === 'JsonSchemaValidation') {
      res.status(400).end();
    } else {
      next(err);
    }
  });

  var port = 3000;
  app.listen(port, function(){
    console.log('app listening on port 3000');
  });

});
