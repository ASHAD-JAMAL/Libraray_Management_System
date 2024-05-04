import React from "react";
import Logo from "../../assets/images/logo.png"
export default function Footer(){
    return(
        <>
            <div className="container-fluid"style={{backgroundColor: '#242424', textAlign:"center", color:"white"}}>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-11">
                        <h1><img src={Logo} alt="logo" /></h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, voluptatem.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-11">
                        <h3>Contact Us</h3>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-11">
                        <h3>Useful Links</h3>
                    </div>
                </div>
            </div>
        </>
    )
}