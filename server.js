const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const port =3000;
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(bodyParser.json());

app.route(`/`).get((req,res)=>{
    res.send("Hello Wold");
})
app.route('/auth').post((req,res)=>{
    if(req.skip){
        res.send("Ok authenticaterd")
    }else{
        res.send("No you cant access that")
    }
})

app.listen(pot,()=>{
    console.log("Server started on port: "+port);
});
