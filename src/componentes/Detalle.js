import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function Detalle(params) {

  // recuperando id de la url
  const id = useParams().id
  // state de la API y consultas
  const [producto, setProducto] = useState({});
  // montaje de la informacion 
  useEffect(() => {
    fetch(("http://localhost:3000/users/api1/" + id)).then(
      response => response.json()).then(
        data => {
          console.log(data)
          setProducto(data.data)
        }).catch(error => console.error(error));
  }, [])

  return (
    <div>
      <h2>DETALLE</h2>
      <h3>SOFT & BOLD</h3>
      <div className="boxx">
        {
          Object.keys(producto).length > 0 && (
            <div className="detalle-boxx">
          <div className="box1">
            <div className="box1_1">
              <h1>{producto.Nombre_Producto}</h1>
              <h2 className="cantidad">{producto.Marca}</h2>
              <h2>$ {producto.Precio}COP</h2>
              <h2 className="cantidad">CANTIDAD</h2>
              <input className="number" id="number" type="number" />
              <ul className="button_contenedor">
                <li className="button">
                  <button className="comprar" type="submit">AGREGAR AL CARRITO</button>
                </li>

              </ul>
            </div>
            <div className="box1_2">
              <img src={"http://localhost:3000/images/products/" + producto.imagen} alt={producto.ID_producto} />
            </div>
          </div>
          <div className="box_2">
            <h2>DESCRIPCION</h2>
            <p> {producto.Descripcion}</p>
            <h2>COMPONENETES</h2>
            <p>{producto.Componentes}</p>
          </div>
        </div>
          )
        }

      </div>
    </div>


  )
}
export default Detalle;
