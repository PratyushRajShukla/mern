const app= require('express')();

const PORT=4000;

app.listen(
    PORT,
    () => console.log(`server is running on ${PORT}`)
);

app.get('/getRequest', (req,res)=>{
    res.send("This is a succesfull Get Requset")
});

app.post('/postRequest',(req,res)=>{
    res.send("This is succesfull Post Request")
});