  
// function requesthandler(req,res){}      or
  const requesthandler = (req,res) => 
 {
    const fs=require('fs');
    const method = req.method;
    const url = req.url;
     if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter message </title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name ="message"><button type="submmit">send</button></form> </body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method === 'POST'){
        const body =[];
        req.on('data',(chunk) =>{
            body.push(chunk);
            console.log(body);
        });
 /*       req.on('end',() =>{
            const parsedbody = Buffer.concat(body).toString();
            console.log(parsedbody);
            const message=parsedbody.split('=')[1];
            fs.writeFileSync('message.txt',message);
        //});
      
        //  res.writeHead(302,{});  or
        res.statusCode=302;
        res.setHeader('location',('/'));
        return res.end();
    });
 */
         return   req.on('end',() =>{
            const parsedbody = Buffer.concat(body).toString();
            console.log(parsedbody);
            const message=parsedbody.split('=')[0];
            fs.writeFile('message.txt',message,(err) => {
                res.statusCode=302;
                res.setHeader('location',('/'));
                return res.end();
                });
            });  
           }

    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>hello welcome to the page</h1> </body>');
    res.write('</html>');

    res.end();
};
// module.exports = requesthandler;

//or

module.exports = {
    handler :requesthandler,
    sometext:'some hard code'
}
//or

//exports.handler = requesthandler;
//exports.sometext ='some hard code'
;