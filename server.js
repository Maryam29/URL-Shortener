var bodyParser = require('body-parser');
// pass passport for configuration
const express = require('express');
const http = require('http');
const path = require('path');
const shortid = require("shortid");
const validUrl = require("valid-url");
const Database = require('./server/config.js');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


app.post('/getURLshortened', async(req, res)=>{
const updatedAt =  new Date();
const ShortURL = "/" + shortid.generate();
const OriginalURL = req.body.originalUrl;
//console.log(OriginalURL);

if (validUrl.isWebUri(OriginalURL)) {
    try {
      Database.connectToServer(async(err)=>{
        //  console.log(OriginalURL);
        const item = await Database.findOne('URLShortener', { OriginalURL: OriginalURL });
         //console.log(item);
        if (item.length) {
          return res.status(200).json(item[0]);
        } else {
          const item = {
          OriginalURL,
          ShortURL,
          updatedAt
          };
          var rows = await Database.insertOne('URLShortener',item);
          //console.log(rows);
          return res.status(200).json(rows);
      }
    });
      
    } catch (err) {
      res.status(401).json("Invalid User Id");
    }
  } else {
    return res
      .status(401)
      .json(
        "Invalid Original Url"
      );
  }
});

app.get('/getAllURLs',async(req,res) => {
    Database.connectToServer(async(err)=>{
             if(err)
             throw err;
             
             try{
                 var rows = await Database.getAll('URLShortener')
                 //console.log(rows);
                 return res.send(rows);
             }
             catch(e){
                 //console.log(e);
                 throw new Error(e);
             }
         });
 });

app.post('/fetchOriginalURL',async(req,res) => {
  Database.connectToServer(async(err)=>{
           if(err)
           throw err;
           
           try{
             var shorturl = req.body.shorturl;
               var rows = await Database.findOne('URLShortener',{ShortURL: shorturl});
               //console.log(rows);
               return res.send(rows);
           }
           catch(e){
               //console.log(e);
               throw new Error(e);
           }
       });
});
app.post('/deleteURLs',async(req,res) => {
    Database.connectToServer(async(err)=>{
             if(err)
             throw err;
             
             try{
               var objects = req.body.ObjectIds;
               //objectids = objectids.map(val => {return Database.ObjectID(val)});
               var rows = await Database.deleteMany('URLShortener', objects);
                return res.send(rows);
             }
             catch(e){
                 //console.log(e);
                 throw new Error(e);
             }
         });
  });

app.get('*', (req, res) => {
    console.log("Inside *")
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));