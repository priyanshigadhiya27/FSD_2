import { useState } from "react";

function US6(){
         const[data,setdata]=useState({})
          const hc=(e)=>{
            const{name,value}=e.target
            setdata({...data,[name]:value})
          }
          return(
            <>
            <input type="text" name="fname" onChange={hc}/>
            <input type="text" name="lname" onChange={hc}/>
            <h1>firstname:{data.fname}</h1>
              <h1>lastname:{data.lname}</h1>


            </>
          )
}
export default US6