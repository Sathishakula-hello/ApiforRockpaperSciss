const express=require("express")
const fs=require("fs")
const server=express();
const startGame=require("./index")
server.get("/api/start",(req,res)=> 
{
    startGame();
    var d=fs.readFileSync("data.json","utf-8")
    d=JSON.parse(d)
    res.send("Game loaded successfully");
})
server.get("/api",(req,res)=> 
{
    var d=fs.readFileSync("data.json","utf-8")
    d=JSON.parse(d)
    var k=req.query.id
    res.send(d[k-1])
})
server.get("/api/start/all",(req,res)=>
{ 
    var d=fs.readFileSync("data.json","utf-8")
    d=JSON.parse(d)
    res.send(d)
})
const port=process.env.port||5000
server.listen(port,"localhost",()=>
{
    console.log(`Listening for requests from port:${port}`)
})