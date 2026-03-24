const http=require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("how r u?")
    res.write("<h1>hello server</h1>")
    res.end("hi")
}).listen(5678,()=>{
    console.log("server connected")
})

