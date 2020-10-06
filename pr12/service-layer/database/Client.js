const MongoClient = require('mongodb').MongoClient


class Client {
    constructor() {
        const url = process.env.MONGODB_URL
         const client = new MongoClient(url, { useUnifiedTopology: true})

        

        this.instance = client
 
    }
    connect(){
         this.instance.connect()
         return this.instance
        }

    db() {
        const dbName = process.env.MONGODB_DBNAME

        return this.connect().db(dbName)

    }
    disconnect() {
        this.instance.close()
    }
    
}
module.exports = Client