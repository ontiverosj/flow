 const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

const dbname = 'local'; 

const client = new MongoClient(url, { useUnifiedTopology: true})

function testConnection(client){
    client.connect((error) => {
        if(error !== null ){
        console.log ('connection Error')
        console.close()
    return false
        }

    console.log('connected succesfully to mongodb instance')
client.close()
return true 
    })

}

 async function readAll(client) {
   await client.connect()
   console.log('Connected to mongodb instance')

   const db = client.db(dbname)
    
   const collection = db.collection('Users')

  const docs = await collection.find({}).toArray()
  console.log(docs)
  readAll(client)
}

async function createOne(client) {
    await client.connect()

    const db= client.db(dbname)

    let insert = db.collection('user').insertOne({
        name: 'Jake',
        class: 'training',
        favoriteTeam: 'Rams'
    })
    if(inserted.insertCount === 1) {
        console.log('Inserstion Sucessfull!')
        client.close()
        return true
    }
    console.log(' Insertion unsuccessfull.. :(')
    client.close()
    return false
}

createOne(client)
console.log( readAll(client))
