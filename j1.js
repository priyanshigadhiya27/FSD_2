exp = require('express')
app = exp()
sess = require('express-session')

app.use(sess({secret:"this is way",resave:false,saveUninitialized:false

}))
app.get("/",(req,res)=>{
    if(req.session.a){
        req.session.a++
        res.send(`You visties this page ${req.session.a}times`)
    }
    else{
        req.session.a=1
        res.send("welcome user")
    }
})
app.listen(5555,()=>{
    console.log('Server coonected')
})