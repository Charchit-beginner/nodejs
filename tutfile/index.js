const http = require("http")
const fs = require("fs")
const home = fs.readFileSync("index.html")
const contact = fs.readFileSync("contact.html")
const about = fs.readFileSync("about.html")
const service = fs.readFileSync("service.html")
const hostname = "127.0.0.1"
const port = 3000;
const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url
    res.statusCode=  200;
    res.setHeader("content-type","text/html");
    if (url == "/home"){
    res.end(home);}
    else if(url== "/service"){
        res.end(service)
    }
    else if(url== "/contact"){
        res.end(contact)
    }
    else if(url== "/about"){
        res.end(about)
    }
    else{
        res.statusCode = 404
        res.end("<h1>404 not not found")
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });