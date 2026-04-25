exp = require('express')
app = exp()
sess = require('express-session')
app.use(exp.urlencoded({extended:true}))
app.use(sess({secret:"this is way",resave:true,saveUninitialized:false}))

app.use(exp.static('../public',{index:'form.html'}))

app.post('/logindata',(req,res)=>{
    req.session.uname = req.body.uname
    req.session.password = req.body.password
    res.redirect('/login.html')
})

app.post('/orderdata',(req,res)=>{
    req.session.Product= req.body.Product
    req.session.Quantity = req.body.Quantity
    res.redirect('/fetch')
})

app.get('/fetch',(req,res)=>{
    res.send(`Welcome ${req.session.uname}`)
})

app.listen(5678)
