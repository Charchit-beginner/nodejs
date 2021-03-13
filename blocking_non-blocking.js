// Synchronus or blocking line by line execution
// asynchorus or non-blocking - not guaranteed - callbackes will fire
const fs = require("fs");
let txt = fs.readFile("txtfile.txt","utf-8",(err,data)=>{
    console.log(err,data)
})
console.log("hi");