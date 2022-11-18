import React, { Component } from "react";
import { Link } from "react-router-dom"

class Header extends Component {
    render() {

        return (
            
<header>
    <div className="header">
      <div className="iconos">
        <div className="titulo">
          <Link className="header-logo" to="/">
            <img src="/img/header.png" alt="LOGO"/> 
          </Link>
        </div>
        <div className="iconoss"> 
          <i className="fa-solid fa-user fa-lg"></i>
          <Link to="/users">Usuario</Link>
          <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          <Link to="">Buscar</Link>
          <form action="#" method="post">
            <input type="text"/>
          </form>
        </div>
      </div>
    </div>
      <div className="secciones">
        {/*<li><Link to="#">Maquillaje</Link></li>
        <li><Link to="#">Skin care</Link></li>
        <li><Link to="#">Accesorios</Link></li> 
        <li><Link to="/dashboard">Dashboard</Link></li>
        <Link to="/car">
          <i className="fa-solid fa-cart-shopping fa-xl"></i>
        </Link>
        */}
      </div>
    
  </header>
        );
    }
}
export default Header;