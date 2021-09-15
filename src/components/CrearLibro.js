import React, {useState} from "react";

const CrearLibro = () => {

    const [libro, guardarLibro] = useState({
        nombre: "",
        descripcion: "",
        precio: 0,
        stock: 0,
        portada: null
    });

    const datosLibro = e => {
        guardarLibro({
            ...libro,
            [e.target.name]: e.target.value
        })
    }

    const datosImagenes = e => {
        guardarLibro({
            ...libro,
            portada:e.target.files[0]
        })
    }


    return ( 
        <div className="content-form-login">
            <div className="row justify-content-md-center">
                <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb--30 mb-lg--0">
                    <form>
                        <div className="login-form">
                            <div className="row">
                                <div className="col-md-12 col-12 mb--15">
                                    <label htmlFor="nombre">Nombre del libro</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="text" 
                                        name="nombre"
                                        onChange={datosLibro}
                                    />
                                </div>
                                <div className="col-12 mb--20">
                                    <label htmlFor="email">Descripción breve</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="text" 
                                        name="descripcion"
                                        onChange={datosLibro}
                                    />
                                </div>
                                <div className="col-6 mb--20">
                                    <label htmlFor="precio">Precio base</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="number" 
                                        name="precio"
                                        onChange={datosLibro}
                                    />
                                </div>
                                <div className="col-lg-6 mb--20">
                                    <label htmlFor="stock">Stock a vender</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="number"
                                        name="stock" 
                                        onChange={datosLibro}
                                    />
                                </div>
                                <div className="col-12 mb--20">
                                    <legend>* Formato jpg o png</legend>
                                    <label htmlFor="imagenes">Portada y Contraportada</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="file" 
                                        name="imagenes"
                                        onChange={datosImagenes}
                                    />
                                </div>
                                <div className="col-md-12 div-btn-submit">
                                    <a 
                                        href="!#" 
                                        className="btn btn-outlined"
                                    >Crear Libro</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </div>
     );
}
 
export default CrearLibro;
