import { useState } from "react"
import { assets } from "../../assets/assets"
import "./Navbar.css"

const Navbar =()=>{
    const [ menu,setMenu] = useState("menu")
    return(
        <>
        <div className="navbar">
            <img src={assets.logo} alt=""  className="logo" height="40px" width="100"></img>
             <ul className="navbar-menu">
                <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
                <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
                <li onClick={()=>setMenu("liquid-app")} className={menu==="liquid-app"?"active":""}>Liquid-App</li>
                <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</li>
             </ul>
             <div className="navbar-right">
                <img src={assets.search_Icon} alt="" height="20px" width="20" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_Icon} alt="" height="20px" width="30"/>
                   
                    <div className="dot">

                    </div>
                </div>
                <button>sign in</button>
             </div>
        </div>
        </>
    )
}
export default Navbar