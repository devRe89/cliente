import React, {Fragment, useState, useEffect} from 'react';

const EditarCuenta = ({usuario}) => {
    
    const [usuarioEditar, guardarEdicion] = useState({
        nombre: "", 
        email: "", 
        tipo: "", 
        nickname: "", 
        password: "",
        confirmar: ""
    });

    //aplicar useEfect cuando venga de la api
    useEffect(()=>{
        guardarEdicion(usuario);
    },[usuario]);

    const { nombre, email, tipo, nickname, password } = usuarioEditar;

    const UpDatos = e => {
        guardarEdicion({
            ...usuarioEditar,
            [e.target.name]: e.target.value
        });
    }

    return ( 
        <div className="content-form-login">
            <div className="row justify-content-md-center">
                <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb--30 mb-lg--0">
                    <form>
                        <div className="login-form">
                            <div className="row">
                                <div className="col-md-12 col-12 mb--15">
                                    <label htmlFor="email">Nombre completo</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="text" 
                                        name="nombre"
                                        value={nombre}
                                        onChange={UpDatos}
                                    />
                                </div>
                                <div className="col-12 mb--20">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="email" 
                                        name="email" 
                                        value={email}
                                        onChange={UpDatos}
                                    />
                                </div>
                                <div className="col-6 mb--20">
                                    <label>Yo voy a ?</label>
                                    <select 
                                        className="nice-select"
                                        name="tipo"
                                        onChange={UpDatos}    
                                    >
                                        {
                                            tipo === "Normal"
                                            ?
                                                (
                                                    <Fragment>
                                                        <option value={tipo}>Comprar</option>
                                                        <option value="Vendedor">Vender y comprar</option>
                                                    </Fragment>
                                                ) 
                                            :
                                                (
                                                    <Fragment>
                                                        <option value={tipo}>Vender y comprar</option>
                                                        <option value="Normal">Comprar</option>
                                                    </Fragment>
                                                )
                                        }
                                    </select>
                                </div>
                                <div className="col-6 mb--20">
                                    <label htmlFor="nickname">NickName</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="nickname" 
                                        name="nickname" 
                                        value={nickname}
                                        onChange={UpDatos}
                                    />
                                </div>
                                <div className="col-lg-6 mb--20">
                                    <label htmlFor="password">Contraseña</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="password" 
                                        name="password" 
                                        value={password}
                                        onChange={UpDatos}
                                    />
                                </div>
                                <div className="col-lg-6 mb--20">
                                    <label htmlFor="confirmar">Repita la contraseña</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="password" 
                                        name="confirmar" 
                                        value={password}
                                        onChange={UpDatos}
                                    />
                                </div>
                                <div className="col-md-12 div-btn-submit">
                                    <a 
                                        href="!#" 
                                        className="btn btn-outlined"
                                    >Editar mis datos</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </div>
     );
}
 
export default EditarCuenta;
