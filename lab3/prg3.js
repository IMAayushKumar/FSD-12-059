import http from 'http';
const server=http.createServer();
server.on('request',(req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.end();

});
server.listen(4444,()=>{
    console.log("Server is Running...");
});