
const users = require("./state").users;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());


app.get('/users/1', (request,response,next) => {
    response.send(users[0])
   });
   
app.get('/users', (request,response,next) => {
    response.send(users)
   });

app.post('/users', (request,response,next) => {
    users.push(request.body)
    response.send(users)
   });
app.put('/users/1', (request,response,next) => {
    users.find(request.body)
    response.send(users)
   });
app.delete('/users/1', (request,response,next) => {
    users.pop(request.body)
    response.send('deleted')
   });
   
app.listen(3002, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});
