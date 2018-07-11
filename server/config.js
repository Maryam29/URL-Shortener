const MongoClient = require("mongodb").MongoClient;
ObjectID = require('mongodb').ObjectID;
var _db;

const connectToServer = (callback)=>{
var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/URLShortener';

MongoClient.connect(url,(err,db)=>{
    _db = db.db("URLShortener");
    return callback(err);
});
}

const getDb = ()=>{
    return _db;
}

const insertOne = async(col, obj)=>{
    try{
        const results = await _db.collection(col).insertOne(obj);
        //console.log(results.ops[0])
        return results.ops[0];
    }
    catch(e){
        throw e;
    }
}

const getAll = async(col)=>{
    try {
        const results = await _db.collection(col).find().toArray();
        return results
    } catch (e) {
        throw e
    }
}

const findOne = async(col, obj)=>{
    try {
        const results = await _db.collection(col).find(obj).toArray();
        return results
    } catch (e) {
        throw e
    }
}

const deleteMany = async(col, objects)=>{
    try {
        objects = objects.map(val => {
            return ObjectID(val._id);
        });
        const results = await _db.collection(col).deleteMany({_id: {$in:objects}});
        //console.log(results);
        return results
    } catch (e) {
        throw e
    }
}

const disconnectDB = () => _db.close()

module.exports = {
    connectToServer,
    getDb,
    insertOne,
    deleteMany,
    getAll,
    findOne,
    ObjectID
    };