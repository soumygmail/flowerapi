const http = require('http');
const data = require('./data')
http.createServer((req,res)=>{
  
    res.writeHead(200,{"Content-Type":"application/json"})
    // res.write(JSON.stringify({name:'avbcdgyyyyurrete', email:'anil@test.com'}));
    res.write(JSON.stringify(data));
    res.end();
}).listen(3000);