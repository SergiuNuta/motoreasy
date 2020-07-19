const MongoClient = require('mongodb').MongoClient;

const dbConnectionUrl = "mongodb+srv://serghei_05:Password1@cluster0.jhtts.mongodb.net/motoreasy?retryWrites=true&w=majority"

function initialize(
    dbName,
    dbCollectionName,
    succesCallback,
    failureCallback
) {
    MongoClient.connect(dbConnectionUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, function (err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
            failureCallback(err);
        } else {
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(dbCollectionName);
            console.log("[MongoDB] SUCCES");
            succesCallback(dbCollection);
        }
    });
}

module.exports = {
    initialize
};

