const http = require("http")
const fs = require("fs")
const content = fs.readFileSync("nodehtml.html")
const server = http.createServer((req,res)=>{
    res.writeHead(500,{"Content-type":"text/html"})
    res.end(content)
})

server.listen(80,"127.0.0.1",()=>{
    console.log("listen");
})
