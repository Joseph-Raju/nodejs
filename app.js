const http =require('http');



/*function check(req,res){
    console.log(req);

}
http.createServer(check())*/
// console.log(req.url,req.method,req.headers);
    //process.exit();
    
const route=require('./route.js');


const server = http.createServer(route.handler);
 

server.listen(3000);
