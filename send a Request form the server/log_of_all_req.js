const http = require("http");

const myServer = http.createServer((req,res)=>{
    console.log('new Req is find');
    res.end('hay! i am form server side')
})


// lestion this server

myServer.listen(4400,()=>{
    console.log("server is started at the port 4400")
})