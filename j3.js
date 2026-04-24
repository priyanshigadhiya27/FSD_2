exp = require('express')
app = exp()
sess = require('express-session')

app.use(sess({secret:"this is way",resave:true,saveUninitialized:false

}))
app.use(exp.static('../public',{index:'form.html'}))
app.get('/savesession',(req,res)=>{
    req.session.uname = req.query.uname
    req.session.password = req.query.password
    res.redirect('/fetch')

})
app.get('/fetch',(req,res)=>{
   if(req.session.uname=="admin"&& req.session.password=="admin@123"){
     res.send(  `Welcome ${req.session.uname}
        <a href ='/destory1'>Logout</a> `)
   }
   else{
    res.send("Enter valid user name and passowrd")
   }
})
app.get('/destory1',(req,res)=>{
 req.session.destroy()
  res.redirect('/')
})
app.listen(5689,()=>{
    console.log("Server connected")
})