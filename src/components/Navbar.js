import React from 'react';

import "bootstrap/dist/css/bootstrap.css";
import "./styles/Navbar.css";
import logo from '../images/logo.svg';

class Navbar extends React.Component {
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">

                    <a className="Navbar__brand" href="/"></a>
                    <img className="Navbar__brand-logo" src={logo} alt="Logo"/> 
                    <span className="font-weigth-light">Platzi</span>
                    <span className="font-weigth-bold">Conf</span>

                </div>
            </div>
        )
    }
}

export default Navbar;