expr = require("express")
app = expr()
const a = (req, res, next) => {
    req.uname = 'abc'
    console.log("uname insert")
    next()
}
const b = (req, res, next) => {
    req.mark = 20 + 3
    console.log("mark updated")
}
app.use('/data', a, b)
app.get('/data', (req, res) => {
    res.send("username"+req.uname+"update mark"+req.mark)
})
app.listen(6007)

