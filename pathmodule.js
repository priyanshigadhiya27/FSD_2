path=require('path')
a=path.dirname("D:/FSD/hi.txt")
console.log(a)
b=path.basename("D:/FSD/hi.txt")
console.log(b)
c=path.extname("D:/FSD/hi.txt")
console.log(c)
d=path.parse("D:/FSD/hi.txt")
console.log(d)
if(d.ext==".txt"){
    console.log("text file")
}
else{
  console.log(" not text file")
}


