import React from "react"

const Footer = () => <footer style={{backgroundColor: "#AD1357"}} className="page-footer font-small blue pt-4 rounded-top mt-auto">
    <div className="container-fluid text-center text-md-left">
        <div className="row" >
            <div className="col-md-12 mt-md-0 mt-3">
                <h5 className="text-uppercase" style={{color: "white"}}>¡Gracias por visitarnos!</h5>
            </div>
            <div className="col-md-12 mt-md-0 mt-3">
                <img className="my-2"  src="/img/LogoBlanco.png"/>
                
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright. Conocé nuestra web:
        <a href="https://localhost:3000/" style={{textDecoration: 'none', color: 'white'}}> Sneakers </a>
    </div>

</footer>

export default Footer