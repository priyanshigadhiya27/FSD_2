fs=require('fs')
path=require('path')
a=path.dirname("FSD-mern/path.txt")
console.log(a)
b=path.basename("FSD-mern/path.txt")
console.log(b)
c=a+"/"+b
fs.mkdir(a,(err)=>{if(err)throw err
    console.log("folder done")

fs.writeFile(c,"somedata",(err)=>{if(err)throw err
    console.log("file done")
fs.copyFile(c,"abc.txt",(err)=>{if(err)throw err
    console.log("file done")
fs.unlink(c,(err)=>{if(err)throw err
    console.log("file done")
})


})
})
})

