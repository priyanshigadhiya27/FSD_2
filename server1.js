expr = require("express")
app = expr()
path=require("path")
sp=path.join(__dirname,'/../public')
app.use(expr.static(sp,{index:'form.html'}))
app.get('/',(req,res)=>{
    res.sendFile(sp+'/form.html')
})
app.listen(5672)