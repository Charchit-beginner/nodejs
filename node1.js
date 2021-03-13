const fs = require("fs");
let txt = fs.readFileSync("txtfile.txt","utf-8")
txt = txt.replace("this will be changed","I have replaced the content and made a new file")
console.log(txt);
fs.writeFileSync("txtfileMade.txt",txt)