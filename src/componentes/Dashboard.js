import React, { useEffect, useState } from "react";


function Dashboard() {
    const [producto, setProducto] = useState(0);
    const [total, settotal] = useState([]);
    const [categorias, setcategorias] = useState([]);
    const [Ultimoproducto, setultimoproducto] = useState({});
    useEffect(() => {
        console.log("%cSe monto el componente", "color:green")
        fetch(("http://localhost:3000/users/api1")).then(
            response => response.json()).then(
                data => {
                    setProducto(data.data)
                    settotal(data.total)
                    setcategorias(data.categorias)
                    setultimoproducto(data.data[data.data.length - 1])
                    console.log(data.data[data.data.length - 1])
                }).catch(error => console.error(error));
    }, [])
    return (
        <div key={Ultimoproducto.ID_producto}>
            <h2>DASHBOARD</h2>
            <h3>ULTIMO PRODUCTO</h3>
            <div className="boxx">
                    <div className="detalle-boxx">
                        <div className="box1">
                            <div className="box1_1">
                                <h1>RESUMEN</h1>
                                <h2>PRODUCTOS:{total}</h2>
                                <h1>CATEGORIAS</h1>
                                {
                                    categorias.map((element)=>{
                                        return(
                                            <h2 className="cantidad">{element.nombre}:{element.total} </h2>
                                        )
                                    })
                                }
                            </div>
                            <div className="box1_2">
                                <h2> {Ultimoproducto.Nombre_Producto}</h2>
                                <img src={"http://localhost:3000/images/products/"+ Ultimoproducto.imagen} alt="" />
                            </div>
                        </div>
                        <div className="box_2">
                            <h2>DESCRIPCION ULTIMO PRODUCTO</h2>
                            <p> {Ultimoproducto.Descripcion} </p>
                            <h2>COMPONENETES ULTIMO PRODUCTO</h2>
                            <p>{Ultimoproducto.Componentes}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Dashboard;


