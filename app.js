const express = require('express');
const app = express();

const reqFilter = (reqobject, resobjest, next)=>{
    console.log('reqFilter');
}

app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send("Welcome to my server")
});

app.get('/home',(req,res)=>{
    res.send("Welcome to My Server's Home Page")
});

app.listen(4000, ()=>{
    console.log('listening to port 4000')
});
