const MongoClient = require('mongodb').MongoClient
const url = process.env.MONGO_URL
const client = new MongoClient(url, {useUnifiedTopology: true})
const db = function(){
 return client.db(process.env.Mongo_db)
}
//connect to the data base 

 module.exports.createOne= async function creatOne(object){
    //check to make sure object hs the properties you expect 
await client.connect()

const inserted  =  await db.collection('User').insertOne(object)

if(inserted.insertedCount === 1){
    console.log('MongoDB insertion succsessful')
}

}

module.exports.retriveAll= async function (){
async function retriveAll(){
    await client.connect()

    const users = await db().collection('Users').find({}).toArray()
    return users
}
}

async function updateOne(){

}

async function deleteOne(){

}