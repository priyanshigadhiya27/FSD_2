var url=require('url')
var addr='http://localhost:8080/data?month="March"&year=2026#about'
process.noDeprecation=true
var d=url.parse(addr,true)
// leap=d.query.year
// if(leap%4==0){
//     console.log("it is leap year")
// }
// else{
//     console.log("not a leap year")
// }
// // console.log(d)
// console.log(d.protocol)
// console.log(d.search)
// console.log(d.query)
// console.log(d.query.name)




var url=require('url')
var addr='http://localhost:8080/data?T1=25&T2=23&T3=24'
process.noDeprecation=true
var d=url.parse(addr,true)
x=parseInt(d.query.T1)
y=parseInt(d.query.T2)
z=parseInt(d.query.T3)
console.log("sum=",x+y+z)
console.log("avg",(x+y+z)/3)



var addr='http://localhost:8080/data?T1=25&T2=23&T3=24'
var myurl=new URL(addr)
console.log(myurl)







