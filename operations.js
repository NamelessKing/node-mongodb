const assert = require("assert");

exports.insertDocument = (db, doc, collection, callBack) => {
    const coll = db.collection(collection);
    return coll.insert(doc);
};

exports.findDocuments = (db, collection, callBack) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray();
};

exports.removeDocument = (db, doc, collection, callBack) => {
    const coll = db.collection(collection);
    return coll.deleteOne(doc);
};

exports.updateDocument = (db, doc, update, collection, callBack) => {
    const coll = db.collection(collection);
    return coll.updateOne(doc, { $set: update }, null);
};
