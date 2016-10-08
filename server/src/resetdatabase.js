var ObjectID = require('mongodb').ObjectID;

var databaseName = "laf-data";
// Put the initial mock objects here.
var initialData = {
  "users":{
    "1":{
      "_id": new ObjectID("000000000000000000000001"),
      "fullName": "Tim",
      "postItems": [new ObjectID("000000000000000000000002"), new ObjectID("000000000000000000000003")],
      "lostItems": []
    },
    "2":{
      "_id": new ObjectID("000000000000000000000002"),
      "fullName": "Leo",
      "postItems": [new ObjectID("000000000000000000000001")],
      "lostItems": []
    }
  },
  "found-items":{
    "1": {
      "_id":new ObjectID("000000000000000000000001"),
      "post_user":new ObjectID("000000000000000000000002"),
      "found_location":"outside of library",
      "current_location":"library first floot",
      "pic":"img/product1.jpg",
      "claim_userid":new ObjectID("000000000000000000000001")
    },
    "2": {
      "_id":new ObjectID("000000000000000000000002"),
      "post_user":new ObjectID("000000000000000000000001"),
      "found_location":"ilc bus station",
      "current_location":"31 bus driver",
      "pic":"img/product2.jpg",
      "claim_userid":null
    },
    "3": {
      "_id":new ObjectID("000000000000000000000003"),
      "post_user":new ObjectID("000000000000000000000001"),
      "found_location":"lgrc library 3rd floot",
      "current_location":"lgrc library front desk",
      "pic":"img/product3.jpg",
      "claim_userid":null
    }
  }
};


  /**
   * Resets a collection.
   */
  function resetCollection(db, name, cb) {
    // Drop / delete the entire object collection.
    db.collection(name).drop(function() {
      // Get all of the mock objects for this object collection.
      var collection = initialData[name];
      var objects = Object.keys(collection).map(function(key) {
        return collection[key];
      });
      // Insert objects into the object collection.
      db.collection(name).insertMany(objects, cb);
    });
  }

  /**
   * Reset the MongoDB database.
   * @param db The database connection.
   */
  function resetDatabase(db, cb) {
    // The code below is a bit complex, but it basically emulates a
    // "for" loop over asynchronous operations.
    var collections = Object.keys(initialData);
    var i = 0;

    // Processes the next collection in the collections array.
    // If we have finished processing all of the collections,
    // it triggers the callback.
    function processNextCollection() {
      if (i < collections.length) {
        var collection = collections[i];
        i++;
        // Use myself as a callback.
        resetCollection(db, collection, processNextCollection);
      } else {
        cb();
      }
    }

    // Start processing the first collection!
    processNextCollection();
  }

  // Check if called directly via 'node', or required() as a module.
  // http://stackoverflow.com/a/6398335
  if(require.main === module) {
    // Called directly, via 'node src/resetdatabase.js'.
    // Connect to the database, and reset it!
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/' + databaseName;
    MongoClient.connect(url, function(err, db) {
      if (err) {
        throw new Error("Could not connect to database: " + err);
      } else {
        console.log("Resetting database...");
        resetDatabase(db, function() {
          console.log("Database reset!");
          // Close the database connection so NodeJS closes.
          db.close();
        });
      }
    });
  } else {
    // require()'d.  Export the function.
    module.exports = resetDatabase;
  }
