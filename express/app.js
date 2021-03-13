const express = require("express")
const fs = require("fs")
const path = require("path")
const app = express() // thsi is to be done to make a express app both 1 and 2
const port = 80
// EXPRESS SPECIFIC STUFF

// serving static files static is a folder and whenever we want to serve them we will keep them in folder
app.use("/static",express.static("static")) // static files are like view page souce files and doesn't execute
app.use(express.urlencoded())
// PUG SPECIFIC STUFF
app.set("view engine","pug")// set the template engine as pug


app.set("views",path.join(__dirname,"views")) // set the views directory

// our pug demo endpoint
// ENDPOINTS

// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo', { title: 'Hey', message: 'Hello there! how to use pug ' })
// })         
 
app.get("/",(req,res)=>{
    const con = "this is the best content"
    const params = {"title":"pub is the best thing","content":con}
    res.status(200).render("index.pug",params)
})       
app.post("/",(req,res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputTowrite = `the name of the client is ${name}, ${age} years old , ${gender}, residing at ${address}. More about him/her :  ${more}`
    fs.writeFileSync("output.txt",outputTowrite)
    const params = {"title":"Your form is being submitted succesfully"}
    res.status(200).render("index.pug",params)
})

app.get("/about",(req,res)=>{
    res.send("this is about  my first express app with harry")
})  
app.post("/about",(req,res)=>{ 
    res.send("this is post request about  my first express app with harry")
}) 

// STARTING SERVER
app.listen(port , ()=>{
    console.log(`the application started successfully on port ${port}`)
})   