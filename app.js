const express = require ('express');
const path = require('path');

const app = express();


const publicpath = path.resolve(__dirname,'./public');

app.use(express.static(publicpath));
 
app.listen(process.env.PORT || 3000, function () { 
console.log("Levantando un servidor con Express");
 }) 

 app.get('/',(req,res ) => {
    res.sendFile (path.resolve(__dirname,'./views/home.html'));
 } )