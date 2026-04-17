expr = require("express")
app = expr()
app.use(expr.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send(`<form action="/data" method="post">
        username:<input type='text' name='uname'>
        <input type='submit'></form>`)
})
app.post('/data', (req, res) => {
    uname = req.body.uname
    res.send(`welcome ${uname}`)
})
app.listen(5623,()=>{
    console.log('server started')
    })
