import http from 'http';
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/json"});
    console.log("CLient URL:",req.url)

    const product = [
      {
        name: "Iphone",
        price: "85000",
        qty: 3,
        discount: 34,
      },
      {
        name: "Iphone2",
        price: "850002",
        qty: 32,
        discount: 342,
      },
      {
        name:"MAcbook Air",
        price:"$12345",
        qty:"1",
        discount:"$112"
      }
    ];
    res.end(JSON.stringify(product));
});
server.listen(3000,()=>console.log("Server is running at 3000..."));
console.log("")
console.log("")