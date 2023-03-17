console.log("Message to Developer")
function Alertmessage()
{
    const msg=()=>{alert("Message from Javascript Alert!")}
    return <div><button onClick={msg}>Click</button></div>
}
ReactDOM.render(<Alertmessage/>,document.getElementById('react'))