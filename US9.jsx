import { useState } from "react";

function US9(){

     const[data,setdata]=useState({})
       const hc=(e)=>{
            const{name,value}=e.target
            setdata({...data,[name]:value})
          }
          const hs=(e)=>{
            e.preventDefault()
            alert(`welcome ${data.fname} ${data.lname} ${data.email} ${data.pass}
                 ${data.msg} ${data.gender} ${data.city}`)
          }
return(
    <>
        <form onSubmit={hs}>
            <input type="text" name="fname" onChange={hc}/>
             <input type="text" name="lname" onChange={hc}/>
              <input type="email" name="email" onChange={hc}/>
               <input type="password" name="pass" onChange={hc}/>
                <textarea type="text" name="msg" onChange={hc}/>
                 <input type="radio" name="gender" onChange={hc}/>
                  <select name="city" onChange={hc}>
                  <option value="">select city</option>
                  <option value="abd">abd</option>
                  <option value="baroda">baroda</option>
                  <option value="rjkt">rjkt</option>
                   </select>
                  <input type="submit" name="submit" onClick={hc}/>


                   

        </form>

    </>
)

}
export default US9