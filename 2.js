expr = require("express")
app = expr()
app.use(expr.static('./'))
app.listen(5678, () => {
    console.log("server started")
})