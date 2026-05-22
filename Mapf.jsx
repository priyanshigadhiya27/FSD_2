function Mapf(){
let obj=[{id:1,name:'abc',mark:22},{id:2,name:'pqr',mark:23},{id:3,name:'xyz',mark:24}]

return(
    <>
    {obj.filter((i)=>i.mark==22)
    .map((i)=>{
        return(
        <div key={i.id}>
        
     <h1>name of student={i.name.toUpperCase()}</h1>
     <h1>marks={i.mark+1} </h1>

</div>
        )
    })}
    </>
)
}
export default Mapf