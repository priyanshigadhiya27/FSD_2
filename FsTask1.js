fs=require('fs')
fs.writeFileSync("hii.txt","0 1 -9 20 33 -44 50")
 data=fs.readFileSync("hii.txt","Utf-8")
d=data.split(" ").sort()
console.log(d)

