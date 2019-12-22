// import mongodb from 'mongodb'
const assert = require('assert');

const mongodb = require('mongodb')
const defaultConnStr = 'mongodb://127.0.0.1:27017/local'

const dbConfig = {
    dbClient: null,

    getClient:function () {
        return this.dbClient
    },
    
    connect: function (connStr = defaultConnStr){
        mongodb.connect(connStr, (error, db) => {
            assert.equal(null, error);
            if (error) this.dbClient = null
            else {
                console.log('dbCreated')
                this.dbClient = db.db('local')
            }
        })
    }
}

module.exports = dbConfig