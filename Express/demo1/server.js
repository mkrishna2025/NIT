console.log("Execution Started");

var express = require("express");
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const users = [
    { id: 1, name: 'Rakesh', city: 'Hyderabad'},
    { id: 2, name: 'Arjun', city: 'Vijayawada'}
];

app.get("/", (req, res ) => {
    res.send("Welcome to Demo");
});

app.get("/users", (req, res ) => {
    var responseData = {
        sucess: true,
        data: users
    }
    res.json(responseData);
});

app.get("/userById", (req, res ) => {
    var id = req.query.id;
    /*var user = {};
    for(var rec of users ){
        if(rec.id == id){
            user = rec;
        }
    }*/
    const result = users.filter(user => user.id == id);
    var responseData = {
        sucess: true,
        data: result
    }
    res.json(responseData);
});

app.post("/addUser", (req, res ) => {
    
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.password);

    /*
    console.log(req.body);
    console.log(req.query);
    console.log(req.params);
    */

    var responseData = {
        sucess: true
    };
    res.json(responseData);
});

app.listen(3000);