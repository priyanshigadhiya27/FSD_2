const shape=[{name:"circle",diameter:8},{name:"square",side:10}]
fs=require('fs')
fs.writeFileSync("shape.txt",JSON.stringify(shape))
data=fs.readFileSync("shape.txt","Utf-8")
console.log(data)
data=JSON.parse(data)
x=data[0]["diameter"]
y=3.14*x
console.log(y)
z=data[1]["side"]
p=4*z
console.log(p)







