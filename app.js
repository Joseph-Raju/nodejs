const http =require('http');

/*function check(req,res){
    console.log(req);

}
http.createServer(check())*/

const server = http.createServer((req,res) => {
    console.log(req.url,req.method,req.headers);
    //process.exit();
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>hello welcome to the page</h1> </body>');
    res.write('</html>');
});

server.listen(3000);
