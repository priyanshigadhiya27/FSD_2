import { useState } from "react";

function US10(){

     const[data,setdata]=useState({})
       const hc=(e)=>{
            const{name,value}=e.target
            setdata({...data,[name]:value})
          }
          const hs=(e)=>{
            e.preventDefault()
           if(data.pwd==data.cpwd){
            alert(`welcome user`)
           }
           else{
            alert(`must be same`)
           }
          }
return(
    <>
        <form onSubmit={hs}>
            <input type="email" name="email" onChange={hc}/>
            <input type="password" name="pwd" onChange={hc}/>
             <input type="password" name="cpwd" onChange={hc}/>
            <input type="submit" name="submit" onClick={hc}/>
        </form>

    </>
)

}
export default US10