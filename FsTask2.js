fs=require('fs')
var data2=[{'name':'abc','age':18},{'name':'xyz','age':20}]
fs.writeFileSync("hello2.txt",JSON.stringify(data2))
data=fs.readFileSync("hello2.txt","Utf-8")
console.log(data)





