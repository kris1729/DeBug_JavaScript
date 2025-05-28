const http = require("http");
const fs = require("fs");


const myServer = http.createServer((req, res) => {
    console.log('new Req is find');

    // no blocking 
    const loge = `${Date.now().toLocaleString()} : ${req.url} --> new request`;
    fs.appendFile("loge.txt",loge , (err, data) => {
        res.end('hay! i am form server side');
    })


})


// lestion this server

myServer.listen(4400, () => {
    console.log("server is started at the port 4400")
})