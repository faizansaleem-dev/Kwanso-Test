const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes")
app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())




app.use(routes);


app.listen(8080, function(){
    console.log("App Running!!!!!!!!!");
});