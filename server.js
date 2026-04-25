expr=require('express')
app=expr()
multer=require("multer")
app.use(expr.static('../public',{index:"index1.html"}))
Storage=multer.diskStorage({
    destination:"hello",
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
upload=multer({Storage})
app.post('/data',upload.single('mypic'),(req,res)=>{
    file=req.file
    if(file){
        res.send(`file upload ${file.originalname}`)
    }
    else{
        res.send('not found')
    }

})
app.listen(5555,()=>{
    console.log("server started")
})
