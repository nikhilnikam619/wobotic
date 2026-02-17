import { useState } from "react"
import "./Header.css"
export default function Header(){

    const [serch,setSerch]=useState("")



    return(

        <>
        <div className="Header">
            <div className="Camera">

            <h4 style={{margin:0}}>Cameras</h4>
<p>manage your cmaras here</p>
            </div>
            <input style={{height:30,background:"#F3F3F4"}} type="text" name="serch" id="serch" value={serch} onChange={(e)=>setSerch(e.target.value)} />
        </div>
        </>
    )

}