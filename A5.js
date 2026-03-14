 fs=require('fs')
fs.writeFile("hello.txt","good morning",(err)=>{if(err)throw err
    console.log("writtem operation")

fs.appendFile("hello.txt","it is warm day",(err)=>{if(err)throw err
    console.log("append done")

fs.readFile("hello.txt","UTF-8",(err,data)=>{if(err)throw err
    console.log("data")
    console.log("read operation done")
})
})
})
console.log("process done")