expr = require("express")
app = expr()
path=require("path")
sp=path.join(__dirname,'/../public')
app.use(expr.static('../public',{index:'form1.html'}))
app.use(expr.urlencoded({encoded:true}))
app.post('/data',(req,res)=>{
    uname=req.body.username
    pass=req.body.password
    res.send(`welcome ${uname} your password is ${pass}`)
})
app.listen(5672)