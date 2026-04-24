exp = require('express')
app = exp()
sess = require('express-session')
app.use(exp.urlencoded({
 extended: true
}))
app.use(sess({secret:"this is way",resave:true,saveUninitialized:false

}))
app.use(exp.static('../public',{index:'login.html'}))
app.post('/savesession',(req,res)=>{
    req.session.uname = req.body.uname
    req.session.password = req.body.password
    res.redirect('/order.html')

})//for aptitude click on extra then bulidstack and then/aptitude2233 
app.post('/orderdata',(req,res)=>{
   
     req.session.product = req.body.product
    req.session.qua = req.body.qua
    res.redirect('/summary')

})
app.get("/summary",(req,res)=>{
    res.send(  `Welcome ${req.session.uname} ${req.session.product} ${req.session.qua}
        <a href ='/destory1'>Logout</a> `)

})
app.get('/destory1',(req,res)=>{
 req.session.destroy()
  res.redirect('/')
})
app.listen(5685,()=>{
    console.log("Server connected")
})