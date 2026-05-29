import { useState } from "react";

function US5(){
         const[obj,setobj]=useState({brand:'BMW',color:'titiangrey',model:'X5',year:'2009'})
         const hc=()=>{
            setobj=({brand:'audi',color:'pink',model:'I5',year:'2010'})
         }
         return(
            <>
            <h1>MY car{obj.brand} {obj.color} {obj.model}{obj.year}</h1>
            <button onClick={hc}>click</button>
            </>
         )
}
export default US5