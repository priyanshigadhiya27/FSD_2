object={data:{a:15,b:20,c:[40,30]}}
fs=require('fs')
fs.writeFileSync("input.txt",JSON.stringify(object))
data=fs.readFileSync("input.txt","Utf-8")
console.log(data)
data=JSON.parse(data)
x=data['data']['a']+data['data']['b']
console.log("addition of a and b is" +x)
y=data['data']['c'][1]-data['data']['b']
console.log("addition of a and b is" +y)
z=data['data']['c'][1]*data['data']['c'][0]
console.log("addition of a and b is" +z)