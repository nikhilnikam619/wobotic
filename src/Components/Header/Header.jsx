import "./Header.css"
export default function Header({serch,setSerch}){




    return(

        <>
        <div className="Header">
            <div className="Camera">

            <h4 style={{margin:0}}>Cameras</h4>
<p>manage your Cameras here</p>
            </div>
            <input style={{height:30,background:"#F3F3F4"}} type="text" name="serch" id="serch" placeholder="Search Here" value={serch} onChange={(e)=>setSerch(e.target.value)} />
        </div>
        </>
    )

}