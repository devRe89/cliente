import React from 'react';
import {Link} from 'react-router-dom';

const Registro = () => {
    return ( 
        <div className="container content-form-login">
            <div className="row justify-content-md-center">
                <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb--30 mb-lg--0">
                    <form>
                        <div className="login-form">
                            <h4 className="login-title">Crear una cuenta</h4>
                            <div className="row">
                                <div className="col-md-12 col-12 mb--15">
                                    <label for="email">Nombre completo</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="text" id="name"
                                        placeholder="Juan, Pedro, Ana...."
                                    />
                                </div>
                                <div className="col-12 mb--20">
                                    <label for="email">Email</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="email" 
                                        id="email" 
                                        placeholder="email@email.com"
                                    />
                                </div>
                                <div class="col-6 mb--20">
                                    <label>Yo voy a ?</label>
                                    <select class="nice-select">
                                        <option>Comprar</option>
                                        <option>Vender y comprar</option>
                                    </select>
                                </div>
                                <div className="col-6 mb--20">
                                    <label for="email">NickName</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="email" 
                                        id="email" 
                                        placeholder="Ej: Juan89W"
                                    />
                                </div>
                                <div className="col-lg-6 mb--20">
                                    <label for="password">Contraseña</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="password" 
                                        id="password" 
                                        placeholder="*******"
                                    />
                                </div>
                                <div className="col-lg-6 mb--20">
                                    <label for="password">Repita la contraseña</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="password" 
                                        id="repeat-password" 
                                        placeholder="*******"
                                    />
                                </div>
                                <div className="col-md-12 div-btn-submit">
                                    <a 
                                        href="!#" 
                                        className="btn btn-outlined"
                                    >Registrarse</a>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="col-md-12 mt--15">
                        <Link to={'/login'} className="btn btn-outlined">Iniciar Sesión</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Registro;
