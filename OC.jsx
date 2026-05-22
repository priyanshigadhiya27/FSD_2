function OC(){
    const fun3=(e)=>{
        e.preventDefault()
        alert("submit")
    }
    return(
        <>
        <form onSubmit={fun3}>
        <input type="submit"/>
        </form>
        </>
    )
}
export default OC