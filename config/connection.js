const mongoClient = require('mongodb').MongoClient
const state  = {
    db:null
}

module.exports.connect= function(done){
    const url =  'mongodb://localhost:27017'
    const dbname = 'shopping'

    mongoClient.connect(url, (err,client)=>{
        if(err) return done(err)
        state.db = client.db(dbName);
        done() 
    })
    
}
module.exports.get=function(){
    return state.db
}