console.log('running node.js');

const http=require('http')

//create a server object
http.createServer(function(req,res){
res.write('hello')
res.end()
}).listen(3004)