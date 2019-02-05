const assert = require("assert");

exports.insertDocument = (db, doc, collection, callBack) => {
    const coll = db.collection(collection);
    coll.insert(doc, (err, result) => {
        assert.equal(err, null);
        console.log("Inserted " + result.result.n +
            " documents into the collection " + collection);
        callBack(result);
    });
};

exports.findDocuments = (db, collection, callBack) => {
    const coll = db.collection(collection);
    coll.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        callBack(docs);
    });
};

exports.removeDocument = (db, doc, collection, callBack) => {
    const coll = db.collection(collection);
    coll.deleteOne(doc, (err, result) => {
        assert.equal(err, null);
        console.log("Removed the document " + doc);
        callBack(result);
    });
};

exports.updateDocument = (db, doc, update, collection, callBack) => {
    const coll = db.collection(collection);
    coll.updateOne(doc, { $set: update }, null, (err, result) => {
        assert.equal(err, null);
        console.log("Updated the document with ", update);
        callBack(result);
    });
};
