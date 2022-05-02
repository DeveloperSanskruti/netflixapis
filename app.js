let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 2000;
const mongoUrl = process.env.mongoLiveUrl;

app.get('/',(req,res) => {
    res.send("Welcome")
})

//categories
app.get('/categories',(req,res) => {
    db.collection('categories').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//movies
app.get('/movies',(req,res) => {
    db.collection('movies').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//tvshows
app.get('/tvshows',(req,res) => {
    db.collection('tvshows').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//Connection with database
MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log(`Error while connecting`);
    db=client.db('netflix');
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
})

