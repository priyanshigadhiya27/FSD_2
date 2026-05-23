function M3(){

    const a=(d)=>{
        e.preventDefault()
     alert(document.getElementById("text").value)
    }
    const b=(d)=>{
   document.getElementById("data").innerHTML=e.target.value

    }
     const c=()=>{
   document.getElementById("data2").innerHTML="single click"

    }
     const d=()=>{
           document.getElementById("data2").innerHTML="double click"

    }
    return(
        <>
        <form onSubmit={a}>
            <input type="text" id="text"    onChange={b}/>
            <input type="submit"/>
        </form>
        <h1 id="data"></h1>
        <button onClick={c} onDoubleClick={d}>click/double click</button>
        <h3 id="data2">change as for click</h3>
        </>
    )
}
export default M3